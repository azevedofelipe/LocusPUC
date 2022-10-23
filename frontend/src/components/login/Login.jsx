import { Component } from 'react';
import LoginContext from '../../services/loginContext'

export default class Login extends Component {
  static contextType = LoginContext

  state = {
    username: '',
    password: ''
  }

  constructor(props) {
    super(props)
    this.fillField = this.fillField.bind(this)
    this.setLogout = this.setLogout.bind(this)
    this.loginUser = this.loginUser.bind(this)
  }

  fillField(e) {
    const field = { ...this.state }
    field[e.target.name] = e.target.value
    this.setState(field)
  }

  setLogout(e) {
    e.preventDefault()
    this.context.setLogged('')
  }

  async loginUser(e) {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    const options = {
      method: form.method,
      body: new URLSearchParams(data)
    }

    fetch(form.action, options)
      .then(resp => resp.json())
      .then(obj => {
        if ('non_field_errors' in obj)
          alert(obj['non_field_errors'])
        else
          this.context.setLogged(obj['token'])
      })
      .catch(e => console.log(e))
  }

  render() {
    return (
      <div className='login'>
        <div className="d-block d-xl-flex justify-content-xl-end">
          {
            !!this.context.userUid ?
              (<button onClick={this.setLogout} className='btn btn-xl btn-danger ml-auto'>Deslogar</button>) :
              (<form action='http://127.0.0.1:8000/api/auth/login/' method='post' onSubmit={this.loginUser}>
                <div className="row">
                  <div className='col-12 col-md-8 col-xl-4 mb-2 mb-xl-0'>
                    <input name="username" type="text" className="form-control" placeholder="Usuário" required
                      onChange={this.fillField} value={this.state.username} />
                  </div>
                  <div className="col-12 col-md-8 col-xl-4 mb-2 mb-xl-0">
                    <input name="password" type="password" className="form-control" placeholder="Senha" required
                      onChange={this.fillField} value={this.state.password} />
                  </div>
                  <div className="col-12 col-md-8 col-xl-4">
                    <button className="btn btn-xl btn-primary py-0 px-3 mb-2 w-100 h-100">Entrar</button>
                  </div>
                </div>
              </form>)
          }
        </div>
      </div>
    )
  }
}