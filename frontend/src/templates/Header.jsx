import './Header.css'
import { Link } from 'react-router-dom'
import { Component } from 'react'

export default class Nav extends Component {
  render() {
    return (
      <header className='header col-xl-5 col-12'>
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
        <div className='row mb-2 mb-sm-0'>
          <div className='col-md-6 col-12 col-xl-12 gx-3'>
            <Link className='button' to="/registrarConta" aria-label='Ir para tela de registrar conta'>
              Registrar Conta
            </Link>
          </div>
          <div className='button mt-5 mt-md-0 mt-xl-5 mb-4 col-12 col-md-6 col-xl-12 gx-3'>
            <Link className='button' to="/busca" aria-label='Ir para tela de busca'>
              Buscar Lugares
            </Link>
          </div>
        </div>
      </header>
    )
  }
}