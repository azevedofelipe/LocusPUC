import './Recover.css'
import Main from '../../templates/Main'
import imgRecuperarSenha from '../../assets/imgs/recuperarSenha.jpg'
import { Component } from 'react'

export default class Recover extends Component {

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

  submitPassword(e, email, password1, password2) {
    e.preventDefault()
    const optionsEmail = {
      method: 'post',
      headers: new Headers({ 
        'Content-Type': 'application/json' }),
      body: JSON.stringify({ email })
    }

    fetch(`http://127.0.0.1:8000/api/auth/email/${email}`, optionsEmail)
      .then(resp => resp.json())
      .then(obj => {
        console.log(obj)
        if (!('Erro' in obj)) {
          const optionsId = {
            headers: new Headers({ 
              'Authorization': `Token ${obj['token']}`
            })
          }
          fetch(`http://127.0.0.1:8000/api/auth/user/`, optionsId)
            .then(resp => resp.json())
            .then(objUser => {
              const optionsPassword = {
                method: 'put',
                headers: new Headers({ 
                  'Authorization': `Token ${obj['token']}`, 
                  'Content-Type': 'application/json' 
                }),
                body: JSON.stringify({ password: password1, password2: password2 })
              }
              fetch(`http://127.0.0.1:8000/api/auth/alterar_senha/${objUser['id']}/`, optionsPassword)
                .then(respPassword => respPassword.json())
                .then(objPassword => {
                  if (!('password' in objPassword)) {
                    alert('Senha Alterada com Sucesso')
                  }
                  else
                    alert(JSON.stringify(objPassword))
                })
            })
        }
        else
          alert(JSON.stringify(obj))
        })
  }

  render() {
    return (
      <Main>
        <div className='event-register animate'>
          <div className='row'>
            <div className='col-md-5 col'>
              <h1>Recuperação de Senha</h1>
              <hr />
              <form onSubmit={e => this.submitPassword(e, this.state.email, this.state.password1, this.state.password2)}>
                <div className="form-group mt-4">
                  <label htmlFor="email">E-mail</label>
                  <input type="email" className="form-control" id="email" placeholder="Digite E-Mail associado a sua conta" required
                    name='email' onChange={this.fillField} value={this.state.email}/>
                </div>
                <div className="form-group mt-4">
                  <label htmlFor="password1">Senha</label>
                  <input type="password" className="form-control" id="password1" placeholder="Digite a nova senha" required
                    name='password1' onChange={this.fillField} value={this.state.password1}/>
                </div>
                <div className="form-group mt-4">
                  <label htmlFor="password2">Confirmar Senha</label>
                  <input type="password" className="form-control" id="password2" placeholder="Digite a nova senha novamente" required
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