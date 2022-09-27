import './Login.css'
import { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
      <form className='form m-0'>
        <div className="form-items form-group d-flex justify-content-between">
          <input type="text" className="form-control input-sm" id="user" placeholder="Usuário" required />
          <input type="password" className="form-control" id="password" placeholder="Senha" required />
          <button type="submit" className="btn btn-primary py-0 px-2">Entrar</button>
        </div>
      </form>
    )
  }
}