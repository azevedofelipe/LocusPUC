import './Nav.css'
import { Link } from 'react-router-dom'
import Login from '../login/Login'
import { Component } from 'react'
import LoginContext from '../../services/loginContext'

export default class Nav extends Component {
  static contextType = LoginContext

  render() {
    return (
      <div className='navs py-3'>
        <nav className="navbar navbar-expand-xl">
          <Link className='nav-brand' to='/' >Locus PUC</Link>
          <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navCollapse">
            <ul className="navbar-nav ms-xl-auto w-100 d-block d-xl-flex justify-content-xl-around align-items-xl-center">
              <li className="nav-item mb-2 mb-xl-0">
                <Link className="categories" to='/categorias'>Buscar</Link>
              </li>
              <li className="nav-item mb-3 mb-xl-0">
                {!!this.context.userUid ?
                  (`Bem Vindo, ${(this.context.userUid).substring(0, 30)}`) :
                  (<Link to='/recuperar'>Esqueci Minha Senha</Link>)
                }
              </li>
              <li className="nav-item">
                <Login />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}