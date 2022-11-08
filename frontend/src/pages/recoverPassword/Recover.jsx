import './Recover.css'
import Main from '../../templates/Main'
import imgRecuperarSenha from '../../assets/imgs/recuperarSenha.jpg'
import { Component } from 'react'
import LoginContext from '../../context/loginContext'

export default class Recover extends Component {
  static contextType = LoginContext

  state = {
    email: '',
    password1: '',
    password2: ''
  }

  constructor(props) {
    super(props)
    this.fillField = this.fillField.bind(this)
  }

  fillField(e) {
    const field = { ...this.state }
    field[e.target.name] = e.target.value
    this.setState(field)
  }

  submitPassword(e) {
    if (!!this.context.userKey === false)
      return

    const options = {
      headers: new Headers({ 
        'Authorization': `Token ${this.context.userKey}`, 
        'Content-Type': 'application/json' }),
      body: { email: this.state.email, password1: this.state.password1, password2: this.state.password2 }
    }
    fetch(`http://127.0.0.1:8000/api/lugar/likes/`, options)
      .then(resp => resp.json())
      .then(obj => alert(JSON.stringify(obj)))
  }

  render() {
    return (
      <Main>
        <div className='event-register'>
          <div className='row'>
            <div className='col-md-5 col'>
              <h1>Recuperação de Senha</h1>
              <hr />
              <form action={`http://127.0.0.1:8000/api/auth/alterar_senha/${this.context.userId}`} method='post' onSubmit={this.submitPassword}>
                <div className="form-group mt-4">
                  <label htmlFor="email">E-mail</label>
                  <input type="email" className="form-control" id="email" placeholder="Digite E-Mail associado a sua conta" required
                    name='email' onChange={this.fillField} value={this.state.email}/>
                </div>
                <div className="form-group mt-4">
                  <label htmlFor="password">Nova Senha</label>
                  <input type="password" className="form-control" id="password" placeholder="Senha" required 
                    name='password1' onChange={this.fillField} value={this.state.password1}/>
                </div>
                <div className="form-group mt-4">
                  <label htmlFor="confPassword">Confirmar Senha</label>
                  <input type="password" className="form-control" id="confPassword" placeholder="Digite a senha novamente" required 
                    name='password2' onChange={this.fillField} value={this.state.password2}/>
                </div>
                <button type="submit" className="mt-4 mb-4">Enviar</button>
              </form>
            </div>
            <div className='img d-none d-md-block col-md-7 col-12'>
              <img className='img-thumbnail' src={imgRecuperarSenha} alt='Registro' />
            </div>
          </div>
        </div>
      </Main>
    )
  }
}