import Main from '../templates/Main'
import { Link } from 'react-router-dom'
import imagemInicio from '../../assets/inicio.jpg'

export default function Home() {
  return (
    <Main>
      <div className='row'>
        <div className='col-7'>
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
          <div className='d-flex justify-content-between'>
            <Link to="/registrarConta" className="btn btn-secondary btn-lg" role="button">
              Registrar Conta
            </Link>
            <Link to="/categorias" className="btn btn-secondary btn-lg" role="button">
              Buscar Lugares
            </Link>
          </div>
        </div>
        <div className='col-5'>
          <img className='img-fluid' src={imagemInicio} alt='Início' />
        </div>
      </div>
    </Main>
  )
}