import './Place.css'
import Main from '../../templates/Main'
import { Component } from 'react'
import imgInicio from '../../assets/imgs/inicio.jpg'

export default class PlacePage extends Component {
  state = {
    place: {
      id: -1,
      titulo: '',
      descricao: '',
      thumb: '',
      alt_text: '',
      tags: []
    }
  }
  
  componentDidMount() {
    const currentUrl = window.location.pathname
    let id
    if (currentUrl.charAt(currentUrl.length-1) !== '/')
      id = currentUrl.charAt(currentUrl.length-1)
    else
      id = currentUrl.charAt(currentUrl.length-2)
    
    fetch(`http://127.0.0.1:8000/api/lugar/`)
      .then(resp => resp.json())
      .then(places => {
        const placeArr = places.filter((value, idx) => {
          return value['id'] === parseInt(id)
        })
        const place = placeArr[0]
        this.setState({ place })
      })
  }
  

  render() {
    return (
      <Main>
        <div className='lugar'>
          <h1 className='col col-12 '>{this.state.place.titulo}</h1>
          <hr />
          <div className='row'>
            <div className='col-5'><img className='place-thumbnail img-thumbnail' src={imgInicio} alt='Fachada do edifício Cardeal Leme' /></div>
            <div className='col-6 offset-1'>
              <div id='description'>
                <h2>Descrição</h2>
                <p>{this.state.place.descricao}</p>
              </div>
              <div id='tags'>
                <h2>Tags</h2>
                <p>{this.state.place.tags.join(' ')}</p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div id='comments' className='col-5'>
              <h2>Comentários</h2>
              <div className=''>
                <div className='row my-1 placeholder-box'>
                  <p className='my-1 placeholder-text'>Cláudio:</p>
                  <p className='my-1 placeholder-text'>Lugar excelente, só podia ter mais algumas mesas</p>
                </div>
                <div className='row my-1 placeholder-box'>
                  <p className='my-1 placeholder-text'>Antônio:</p>
                  <p className='my-1 placeholder-text'>Bem silencioso, gostei</p>
                </div>
              </div>
            </div>
            <div id='events' className='col-5 offset-1'>
              <h2>Eventos</h2>
              <div className=''>
                <div className='row my-1 placeholder-box'>
                  <p className='my-1 placeholder-text'>Estudo para P3 de Cálculo B</p>
                  <p className='my-1 placeholder-text'>12/11 - 14:30</p>
                </div>
                <div className='row my-1 placeholder-box'>
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