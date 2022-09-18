import './Header.css'
import { Link } from 'react-router-dom'
import Login from '../login/Login'

export default function Header(props) {
  return (
    <header className='header py-2 px-0'>
      <div className='d-flex justify-content-between align-items-center px-2'>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h1>Locus PUC</h1>
        </Link>
        <Link to='/categorias' className='btn btn-secondary' role='button'>
          Categorias
        </Link>
        <Login />
      </div>
    </header>
  )
}