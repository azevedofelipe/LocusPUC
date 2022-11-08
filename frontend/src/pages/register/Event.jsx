import './Event.css'
import Main from '../../templates/Main'
import imgCadastroEvento from '../../assets/imgs/cadastroEvento.jpg'
import { Component } from 'react'

export default class Event extends Component {

  state = {
    titulo: '',
    data_hora: '',
    image: '',
  }

  constructor(props) {
    super(props)
    this.fillField = this.fillField.bind(this)
    this.registerPlace = this.registerPlace.bind(this)
  }

  fillField(e) {
    const field = { ...this.state }
    field[e.target.name] = e.target.value
    this.setState(field)
  }

  async registerPlace(e) {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    data.append({ autor: 'anonimo' })
    const options = {
      method: form.method,
      body: new URLSearchParams(data)
    }

    fetch(form.action, options)
      .then(resp => resp.json())
      .then(obj => {
        alert(JSON.stringify(obj))
      })
      .catch(e => console.log(e))
  }

  render() {
    return (
      <Main>
        <div className='event-register'>
          <div className='row'>
            <div className='col-md-5 col'>
              <h1>Registre Novo Evento</h1>
              <hr />
              <form action='http://127.0.0.1:8000/api/eventos/' method='post'>
                <div className="form-group mt-4">
                  <label htmlFor="name">Nome do Evento</label>
                  <input type="text" className="form-control" id="name" placeholder="Nome"
                    name='titulo' onChange={this.fillField} value={this.state.titulo} required />
                </div>
                <div className="form-group mt-4">
                  <label htmlFor="date">Data</label>
                  <input type="datetime-local" className="form-control" id="date" placeholder="Selecionar"
                    name='data_hora' onChange={this.fillField} value={this.state.data_hora} required />
                </div>
                <div className="form-group mt-4">
                  <label htmlFor="image" className='input-image'>Foto do Local</label>
                  <input type="file" className="form-control" id="image" placeholder="Imagem"
                    name='image' onChange={this.fillField} value={this.state.image} required />
                </div>
                <button type="submit" className="mt-4 mb-4">Registrar Evento</button>
              </form>
            </div>
            <div className='img d-none d-md-block col-md-7 col-12'>
              <img className='img-thumbnail' src={imgCadastroEvento} alt='Registro' />
            </div>
          </div>
        </div>
      </Main>
    )
  }
}