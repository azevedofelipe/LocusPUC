import './Categories.css'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import Main from '../../templates/Main'
import PlaceBox from '../../place/PlaceBox'

export default class Categories extends Component {

  state = {
    places: [],
    word: '',
    eat: '',
    study: '',
    socialize: ''
  }

  constructor(props) {
    super(props)
    this.fillField = this.fillField.bind(this)
    this.searchPlace = this.searchPlace.bind(this)
  }

  // Funciona no vscode
  componentDidMount() {
    fetch('http://127.0.0.1:8000/api/lugar/')
      .then(resp => resp.json())
      .then(places => this.setState({ places }))
  }

  fillField(e) {
    const field = { ...this.state }
    if (e.target.name === 'eat' || e.target.name === 'study' || e.target.name === 'socialize') {
      if (this.state[e.target.name] !== '')
        field[e.target.name] = ''
      else {
        field[e.target.name] = e.target.value
      }
    } else {
      field[e.target.name] = e.target.value
    }
    this.setState(field)
  }

  searchPlace(e) {
    e.preventDefault()
    if (this.state.eat === '' && this.state.socialize === '' && this.state.study === '') {
      fetch(`http://127.0.0.1:8000/api/lugar/?titulo__contains=${this.state.word}`)
        .then(resp => resp.json())
        .then(places => this.setState({ places }))
    } else {
      fetch(`http://127.0.0.1:8000/api/lugar/?tags__name__in=${this.state.eat},${this.state.study},${this.state.socialize}&titulo__contains=${this.state.word}`)
        .then(resp => resp.json())
        .then(places => this.setState({ places }))
    }
  }

  renderPlaces() {
    return this.state.places.map(place => {
      return (
        <PlaceBox key={place.id}
          titulo={place.titulo} descricao={place.descricao} autor={place.autor} thumb={place.thumb}
          tags={place.tags} likes_count={place.likes_count} dislikes_count={place.dislikes_count} />
      )
    })
  }

  render() {
    return (
      <Main>
        <div className='pb-2'>
          <h1 className='display-4'>
            Categorias
          </h1>
          <hr />
          <div className='d-flex align-items-center mb-4'>
            <Link to="/registrarLugar" className="btn btn-secondary" role="button">Criar Lugar</Link>
            <Link to="/registrarEvento" className="btn btn-secondary ml-5" role="button">Criar Evento</Link>
            <form className='search form m-0' onSubmit={this.searchPlace}>
              <div className="form-items form-group d-flex justify-content-between mx-5">
                <div>
                  <input onClick={this.fillField} value='Comer' type='checkbox' id='eat' name='eat' />
                  <label htmlFor="eat">Comer</label>
                </div>
                <div>
                  <input onClick={this.fillField} value='Estudar' type='checkbox' id='study' name='study' />
                  <label htmlFor="study">Estudar</label>
                </div>
                <div>
                  <input onClick={this.fillField} value='Socializar' type="checkbox" id='socialize' name='socialize' />
                  <label htmlFor="socialize">Socializar</label>
                </div>
                <input type="text" name='word' onChange={this.fillField} value={this.state.word} className="form-control input-sm mx-2" id="place" placeholder="Nome do Lugar" />
                <button type="submit" className="btn btn-primary py-0 px-2 ml-2">Pesquisar</button>
              </div>
            </form>
          </div>
          <div>
            {this.renderPlaces()}
          </div>
        </div>
      </Main>
    )
  }
}
