import './Header.css'
import { Link } from 'react-router-dom'
import Login from '../login/Login'
import { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <header className='header px-3 py-2 d-flex justify-content-between align-items-center'>
        <div className='mr-2'>
          <Link to="/">
            <h1>Locus PUC</h1>
          </Link>
        </div>
        <div className='d-none d-md-block'>
          <Link to='/categorias' className='btn btn-secondary' role='button'>
            Categorias
          </Link>
        </div>
        <div className=''>
          <Login />
        </div>
      </header>
    )
  }
}