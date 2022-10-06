import './Recover.css'
import Main from '../../templates/Main'
import imgRecuperarSenha from '../../../assets/imgs/recuperarSenha.jpg'
import { Component } from 'react'

export default class Recover extends Component {render() {
    return (
      <Main>
        <div className='event-register'>
          <div className='row'>
            <div className='col-md-5 col'>
              <h1>Recuperação de Senha</h1>
              <hr />
              <form>
                <div className="form-group mt-4">
                  <label htmlFor="name">E-mail</label>
                  <input type="email" className="form-control" id="name" placeholder="Digite E-Mail associado a sua conta" required/>
                </div>
                <div className="form-group mt-4">
                  <label htmlFor="password">Nova Senha</label>
                  <input type="password" className="form-control" id="password" placeholder="Senha" required />
                </div>
                <div className="form-group mt-4">
                  <label htmlFor="confPassword">Confirmar Senha</label>
                  <input type="password" className="form-control" id="confPassword" placeholder="Digite a senha novamente" required />
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