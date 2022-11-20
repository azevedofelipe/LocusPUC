import './Header.css'
import { Link } from 'react-router-dom'
import { Component } from 'react'

export default class Nav extends Component {
  render() {
    return (
      <header className='header col-xl-6 col-12 text-center text-xl-start'>
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
          <div className='mb-5 mt-xl-0 col-md-6 col-12 col-xl-6'>
            <Link to="/registrarConta" aria-label='Ir para tela de registrar conta'>
              Registrar-se
            </Link>
          </div>
          <div className='mb-3 mb-xl-0 col-12 col-md-6 col-xl-6'>
            <Link className='px-3' to="/busca" aria-label='Ir para tela de busca'>
              Buscar Locais
            </Link>
          </div>
        </div>
      </header>
    )
  }
}