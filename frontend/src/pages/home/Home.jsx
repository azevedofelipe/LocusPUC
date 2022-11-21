import './Home.css'
import Main from '../../templates/Main'
import imgInicio from '../../assets/imgs/inicio.jpg'
import Header from '../../templates/Header'
import { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <Main>
        <div className='home row d-flex align-items-center'>
          <Header />
          <div className='mt-3 mt-lg-0 d-none d-md-flex img col-12 col-xl-6 gl-5 justify-content-center align-items-center'>
            <img className='img-thumbnail mb-5 mb-lg-0' src={imgInicio} alt='Fachada do edifício Cardeal Leme' />
          </div>
        </div>
      </Main>
    )
  }
}