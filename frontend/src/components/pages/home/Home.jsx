import './Home.css'
import Main from '../../templates/Main'
import imagemIncio from '../../../assets/imgs/inicio.jpg'
import Header from '../../templates/Header'
import { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <Main>
        <div className='home row d-flex align-items-center'>
          <Header />
          <div className='d-none d-md-block img col-md-6 offset-md-1 gl-5'>
            <img className='img-thumbnail' src={imagemIncio} alt='Início' />
          </div>
        </div>
      </Main>
    )
  }
}