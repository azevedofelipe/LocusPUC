import './Event.css'
import Main from '../../templates/Main'
import imgCadastroEvento from '../../assets/imgs/cadastroEvento.jpg'
import { Component } from 'react'
import LoginContext from '../../context/loginContext'

export default class Event extends Component {
  static contextType = LoginContext
  state = {
    titulo: '',
    data_hora: '',
    id_lugar: '',
  }

  constructor(props) {
    super(props)
    this.fillField = this.fillField.bind(this)
    this.registerEvent = this.registerEvent.bind(this)
  }

  fillField(e) {
    const field = { ...this.state }
    field[e.target.name] = e.target.value
    this.setState(field)
  }

  registerEvent(e) {
    e.preventDefault()
    if (this.context.userKey === '') {
      alert('Usuário Precisa Estar Logado')
      return
    }
    const options = {
      method: 'post',
      headers: new Headers (
        {
          'Content-Type': 'application/json',
          'Authorization': `Token ${this.context.userKey}`
        }
      ),
      body: JSON.stringify({autor: this.context.userId, local: this.state.id_lugar, data_hora: this.state.data_hora, titulo: this.state.titulo})
    }
    fetch('http://127.0.0.1:8000/api/eventos',options)
    .then(function (resp){return resp.json()})
    .then(function (obj){
      if ('titulo' in obj)
        alert("Evento criado com sucesso!")
      else if ('data_hora' in obj)
        alert("Formato de data/hora inválido")
      else
        alert("Local não existe")
      })
  }

  render() {
    return (
      <Main>
        <div className='event-register'>
          <div className='row text-center text-xl-start'>
            <div className='col-12 col-xl-6'>
              <h1>Registre Novo Evento</h1>
              <hr />
              <form onSubmit={this.registerEvent}>
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
                  <label htmlFor="placeID">Lugar</label>
                  <input type="number" className="form-control" id="placeID" placeholder="ID do Lugar"
                    name='id_lugar' onChange={this.fillField} value={this.state.id_lugar} required />
                </div>
                <button type="submit" className="mt-4 mb-4">Registrar Evento</button>
              </form>
            </div>
            <div className='img d-none d-md-flex col-12 col-xl-6 justify-content-center align-items-center'>
              <img className='img-thumbnail' src={imgCadastroEvento} alt='Registro' />
            </div>
          </div>
        </div>
      </Main>
    )
  }
}