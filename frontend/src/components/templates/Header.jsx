import './Header.css'
import { Link } from 'react-router-dom'
import { Component } from 'react'

export default class Nav extends Component {
  render() {
    return (
      <header className='header col-md-5 col-12'>
        <h1>
          O que é Locus PUC ?
        </h1>
        <hr />
        <h2>
          Somos um site que tem o objetivo de fazer
          os alunos se sentirem mais integrados no
          campus da PUC-Rio listando os diversos
          locais que a universidade possui.
        </h2>
        <div className='row'>
          <div className='col-12 gx-3'>
            <Link className='button' to="/registrarConta">
              Registrar Conta
            </Link>
          </div>
          <div className='button mt-5 col-12 gx-3'>
            <Link className='button' to="/categorias">
              Buscar Lugares
            </Link>
          </div>
        </div>
      </header>
    )
  }
}