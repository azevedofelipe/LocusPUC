import Main from '../../templates/Main'
import imagemIncio from '../../../assets/imgs/inicio.jpg'
import { Component } from 'react'

export default class Account extends Component {
  render() {
    return (
      <Main>
        <h1 className='display-4'>Registre Sua Conta</h1>
        <hr />
        <div className='row'>
          <div className='col-md-5 col'>
            <form>
              <div className="form-group">
                <label htmlFor="usernames">Usuário</label>
                <input type="text" className="form-control" id="usernames" placeholder="Nome de usuário" required />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Digite seu email" required />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="passwords">Senha</label>
                <input type="password" className="form-control" id="passwords" placeholder="Senha" required />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="passwordConfirmation">Confirmar Senha</label>
                <input type="password" className="form-control" id="passwordConfirmation" placeholder="Senha" required />
              </div>
              <button type="submit" className="btn btn-secondary btn-lg mt-3">Criar Conta</button>
            </form>
          </div>
          <div className='col-md-7 col-12'>
            <br />
            <img className='img-fluid' src={imagemIncio} alt='Registro' />
          </div>
        </div>
      </Main>
    )
  }
}