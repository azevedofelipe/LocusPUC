import './Login.css'
import { Link } from 'react-router-dom'
import { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
      <div className='login d-flex align-items-center justify-content-between'>
        <Link to='/recuperar'>Esqueci Minha Senha</Link>
        <form className='form form-inline my-2 my-lg-0'>
          <div className="form-items form-group d-flex justify-content-between">
            <input type="text" className="form-control input-sm" id="user" placeholder="Usuário" required />
            <input type="password" className="form-control" id="password" placeholder="Senha" required />
            <button type="submit" className="btn btn-primary py-0 px-2">Entrar</button>
          </div>
        </form>
      </div>
    )
  }
}