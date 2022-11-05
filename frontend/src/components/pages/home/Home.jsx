import './Home.css'
import Main from '../../templates/Main'
import imgInicio from '../../../assets/imgs/inicio.jpg'
import Header from '../../templates/Header'
import { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <Main>
        <div className='home row d-flex align-items-center'>
          <Header />
          <div className='d-none d-sm-block img col-12 col-xl-6 offset-xl-1 gl-5'>
            <img className='img-thumbnail' src={imgInicio} alt='Fachada do edifício Cardeal Leme' />
          </div>
        </div>
      </Main>
    )
  }
}