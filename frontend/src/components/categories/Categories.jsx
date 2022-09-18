import './Categories.css'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import Main from '../templates/Main'

export default class Categories extends Component {

  state = {
    places: []
  }

  componentDidMount() {
    fetch('http://127.0.0.1:8000/api/lugar')
      .then(resp => resp.json())
      .then(places => this.setState({ places }))
  }

  renderAllPlaces() {
    return this.state.places.map(place => {
      return (
        <tr key={place.id}>
          <td>{place.titulo}</td>
          <td>{place.id}</td>
          <td>{place.descricao}</td>
          <td>{place.autor}</td>
        </tr>
      )
    })
  }
  
  render() {
    return (
      <Main>
        <div className='d-flex justify-content-between align-items-center'>
          <h1 className='display-4'>
            Categorias
          </h1>
          <Link to="/registrarLugar" className="btn btn-secondary" role="button">
            Criar Lugar
          </Link>
          <form className='search form m-0'>
            <div className="form-items form-group d-flex justify-content-between">
              <input type="text" className="form-control input-sm" id="place" placeholder="Nome do Lugar" />
              <button type="submit" className="btn btn-primary py-0 px-2 ml-2">Pesquisar</button>
            </div>
          </form>
        </div>
        <hr />

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Titulo</th>
              <th>Descricao</th>
              <th>Autor</th>
            </tr>
          </thead>
          <tbody>
            {this.renderAllPlaces()}
          </tbody>
        </table>
      </Main>
    )
  }
}