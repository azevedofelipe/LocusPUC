import './Place.css'
import Main from '../../templates/Main'
import imgInicio from '../../assets/imgs/inicio.jpg'

import { Component } from 'react'

export default class PlacePage extends Component {
  render() {
    return (
      <Main>
        <div className='lugar row d-flex align-items-center'>
          <h1>Biblioteca do Leme</h1>
          <hr />
          <div className='column d-flex align-items-center justify-content-around'>
            <img className='place-thumbnail img-thumbnail' src={imgInicio} alt='Fachada do edifício Cardeal Leme' />
            <div className='row d-flex justify-content-between'>
              <div id='description' className='row d-flex align-items-center'>
                <h2>Descrição</h2>
                <p>Local no Predio Cardial Leme, no sexto andar onde alunos se reunem para estudar</p>
              </div>
              <div id='tags' className='row d-flex align-items-center'>
                <h2>Tags</h2>
                <p>Estudar</p>
              </div>
            </div>
          </div>
          <div className='column d-flex align-items-center justify-content-around '>
            <div id='comments' className='row d-flex align-items-center'>
              <h2>Comentários</h2>
              <div className='flex-column d-flex align-items-stretch'>
                <div className='my-1 row d-flex placeholder-box align-items-center justify-content-around'>
                  <p className='my-1 placeholder-text'>Cláudio:</p>
                  <p className='my-1 placeholder-text'>Lugar excelente, só podia ter mais algumas mesas</p>
                </div>
                <div className='my-1 row d-flex placeholder-box align-items-center justify-content-around'>
                  <p className='my-1 placeholder-text'>Antônio:</p>
                  <p className='my-1 placeholder-text'>Bem silencioso, gostei</p>
                </div>
              </div>
            </div>
            <div id='events' className='row d-flex align-items-center'>
              <h2>Eventos</h2>
              <div className='flex-column d-flex align-items-stretch justify-content-around'>
                <div className='row my-1 d-flex placeholder-box align-items-center justify-content-around'>
                  <p className='my-1 placeholder-text'>Estudo para P3 de Cálculo B</p>
                  <p className='my-1 placeholder-text'>12/11 - 14:30</p>
                </div>
                <div className='row my-1 d-flex placeholder-box align-items-center justify-content-around'>
                  <p className='my-1 placeholder-text'>Feira de Literatura</p>
                  <p className='my-1 placeholder-text'>5/12 - 12:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Main>
    )
  }
}