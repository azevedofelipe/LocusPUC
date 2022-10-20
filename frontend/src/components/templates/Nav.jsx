import './Nav.css'
import { Link } from 'react-router-dom'
import Login from '../login/Login'
import { Component } from 'react'

export default class Nav extends Component {
  render() {
    return (
      <nav className="nav d-flex justify-content-between align-items-center py-2">
        <Link className='brand' to='/' >Locus PUC</Link>
        <Link className="categories d-none d-md-block" to='/categorias'>Buscar</Link>
        <Login />
      </nav>
    )
  }
}