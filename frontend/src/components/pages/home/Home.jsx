import Main from '../../templates/Main'
import { Link } from 'react-router-dom'
import imagemIncio from '../../../assets/inicio.jpg'
import { Component } from 'react'

export default class Home extends Component {
  render() {

    return (
      <Main>
        <div className='row' style={{ backgroundColor: this.props.color }}>
          <div className='col-md-7 col-12'>
            <h1 className='display-4'>
              O que é Locus PUC?
            </h1>
            <hr />
            <p className='lead'>
              Somos um site que tem o objetivo de fazer
              os alunos se sentirem mais integrados no
              campus da PUC-Rio listando os diversos
              locais que a universidade possui.
            </p>
            <div className='row'>
              <div className='col-6'>
                <Link to="/registrarConta" className="btn btn-secondary btn-lg" role="button">
                  Registrar Conta
                </Link>
              </div>
              <div className='col-6'>
                <Link to="/categorias" className="btn btn-secondary btn-lg" role="button">
                  Buscar Lugares
                </Link>
              </div>
            </div>
          </div>
          <div className='col-md-5 col-12'>
            <br />
            <img className='img-fluid' src={imagemIncio} alt='Início' />
          </div>
        </div>
      </Main>
    )
  }
}