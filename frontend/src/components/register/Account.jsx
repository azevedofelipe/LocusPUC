import Main from '../templates/Main'
import imagemInicio from '../../assets/inicio.jpg'
import { Component } from "react";

export default class Account extends Component {
  render() {
    return (
      <Main>
        <h1 className='display-4'>Registre Sua Conta</h1>
        <hr />
        <div className='row'>
          <div className='col-5'>
            <form>
              <div className="form-group">
                <label htmlFor="usernames">Usuário</label>
                <input type="text" className="form-control" id="usernames" placeholder="Nome de usuário" />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Digite seu email" />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="passwords">Senha</label>
                <input type="password" className="form-control" id="passwords" placeholder="Senha" />
              </div>
              <button type="submit" className="btn btn-secondary btn-lg mt-3">Criar Conta</button>
            </form>
          </div>
          <div className='col-7'>
            <img className='img-fluid' src={imagemInicio} alt='Registro' />
          </div>
        </div>
      </Main>
    )
  }
}