import './Account.css'
import Main from '../../templates/Main'
import imgCadastroConta from '../../assets/imgs/cadastroConta.jpg'
import { Component } from 'react'
import Alert from '../../components/Alert'

export default class Account extends Component {

  state = {
    alert: false,
    result: false,
    error: '',
    username: '',
    email: '',
    password: '',
    confPassword: ''
  }

  constructor(props) {
    super(props)
    this.fillField = this.fillField.bind(this)
    this.registerUser = this.registerUser.bind(this)
  }

  fillField(e) {
    const field = { ...this.state }
    field[e.target.name] = e.target.value
    this.setState(field)
  }

  async registerUser(e) {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    const options = {
      method: form.method,
      body: new URLSearchParams(data)
    }

    const validEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/

    if (this.state.password !== this.state.confPassword) {
      this.setState({ alert: true, result: false, error: 'Senhas não são iguais' })
      return
    }
    if (validEmail.test(this.state.email) === false) {
      this.setState({ alert: true, result: false, error: 'Email inválido' })
      return
    }
    this.setState({ alert: true, result: true, error: '' })
    
    fetch(form.action, options)
      .then(resp => resp.json())
      .then(obj => {
        let message = '';
        if ('username' in obj)
          message += `Usuário: ${obj['username'].toString()}\n`
        if ('password' in obj)
          message += `Senha: ${obj['password'].toString()}\n`
        if (message !== '')
          
          this.setState({ alert: true, result: false, error: message })
        else {
          this.setState({ alert: true, result: true, error: '' })
        }
      })
      .catch(e => console.log(e))
  }

  render() {
    return (
      <Main>
        <div className='account-register'>
          <div className='row'>
            <div className='col-md-5 col'>
              <h1>Registre Sua Conta</h1>
              <hr />
              <form action='http://127.0.0.1:8000/api/auth/cadastro/' method='post' onSubmit={this.registerUser}>
                <div className="form-group">
                  <label htmlFor="usernames">Usuário</label>
                  <input name='username' type="text" className="form-control" id="usernames" placeholder="Nome de usuário"
                    onChange={this.fillField} value={this.state.username} required />
                </div>
                <div className="form-group mt-4">
                  <label htmlFor="email">Email</label>
                  <input name='email' type="text" className="form-control" id="email" placeholder="Digite seu email"
                    onChange={this.fillField} value={this.state.email} required />
                </div>
                <div className="form-group mt-4">
                  <label htmlFor="passwords">Senha</label>
                  <input name='password' type="password" className="form-control" id="passwords" placeholder="Senha"
                    onChange={this.fillField} value={this.state.password} required />
                </div>
                <div className="form-group mt-4">
                  <label htmlFor="passwordConfirmation">Confirmar Senha</label>
                  <input name='confPassword' type="password" className="form-control" id="passwordConfirmation" placeholder="Senha"
                    onChange={this.fillField} value={this.state.confPassword} required />
                </div>
                <button type="submit" className="mt-4 mb-4">Criar Conta</button>
              </form>
            </div>
            <div className='img d-none d-md-block col-md-7 col-12'>
              <img className='img-thumbnail' src={imgCadastroConta} alt='Registro' />
            </div>
            {this.state.alert ? <Alert 
                                  result={this.state.result} 
                                  error={this.state.error} 
                                  resultSuccess='Conta criada com sucesso' 
                                  resultError='Erro ao criar a conta'
                                  message='Permitido fazer login'
                                /> : false}
          </div>
        </div>
      </Main>
    )
  }
}