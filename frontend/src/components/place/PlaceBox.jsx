import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-regular-svg-icons";
import { Link } from 'react-router-dom'
import LoginContext from '../../context/loginContext'
import './PlaceBox.css'

library.add(faThumbsUp)
library.add(faThumbsDown)
export default class PlaceBox extends Component {
  static contextType = LoginContext

  state = {
    likes_count: this.props.likes_count,
    dislikes_count: this.props.dislikes_count
  }

  constructor(props) {
    super(props)
    this.setValuation = this.setValuation.bind(this)
  }

  setValuation(e, vote) {
    if (!!this.context.userKey === false)
      return

    const options = {
      headers: new Headers({ 
        'Authorization': `Token ${this.context.userKey}`, 
        'Content-Type': 'application/json' })
    }
    fetch(`http://127.0.0.1:8000/api/lugar/likes/`, options)
      .then(resp => resp.json())
      .then(obj => {
        const userLike = obj.filter((value, idx) => {
          return value['lugar'] === this.props.placeId && value['user_nome'] === this.context.username
        })
        if (userLike.length === 0) {
          const optionsPost = { method: 'post', ...options }
          fetch('http://127.0.0.1:8000/api/lugar/likes/', { ...optionsPost, body: JSON.stringify({ autor: this.context.userId, lugar: this.props.placeId, voto: vote }) })
            .then(resp => resp.json())
            .then(obj => this.setState({ likes_count: obj['lugar_likes'], dislikes_count: obj['lugar_dislikes']}))
        }
        else {
          const optionsPut = { method: 'put', ...options }
          if (userLike[0]['voto'] === vote) {
            fetch(`http://127.0.0.1:8000/api/lugar/like/${userLike[0]['id']}`, { ...optionsPut, body: JSON.stringify({ autor: this.context.userId, lugar: this.props.placeId, voto: 0 }) })
              .then(resp => resp.json())
              .then(obj => this.setState({ likes_count: obj['lugar_likes'], dislikes_count: obj['lugar_dislikes']}))
          }
          else {
            fetch(`http://127.0.0.1:8000/api/lugar/like/${userLike[0]['id']}`, { ...optionsPut, body: JSON.stringify({ autor: this.context.userId, lugar: this.props.placeId, voto: vote }) })
              .then(resp => resp.json())
              .then(obj => this.setState({ likes_count: obj['lugar_likes'], dislikes_count: obj['lugar_dislikes']}))
          }
        }
      })
  }

  render() {
    return (
      <div className="box row g-0">
        <div className='thumb col-6'>
          <img src={this.props.thumb} alt="Imagem do Lugar" />
        </div>
        <div className="col-6 px-3 py-2 d-flex flex-column justify-content-between">
          <div className="title">
            {this.props.titulo}
            
          </div>
          <div className='author'>
            Autor: {this.props.autor}
          </div>
          <div className="box-content">
            {this.props.descricao}
          </div>
          <div className="box-content">
            Tags: {this.props.tags.join(' ')}
          </div >
          <div className="d-flex justify-content-between box-content">
            <div className="icon d-flex justify-content-between align-items-center" onClick={e => this.setValuation(e, 1)}>
              <FontAwesomeIcon icon={faThumbsUp} size='2x'/><span className="valuationFontSize">{this.state.likes_count}</span>
            </div>
            <div className="icon d-flex justify-content-between align-items-center" onClick={e => this.setValuation(e, -1)}>
              <FontAwesomeIcon icon={faThumbsDown} size='2x'/><span className="valuationFontSize">{this.state.dislikes_count}</span>
            </div>
            <div>
              <Link to="/lugar" className="btn btn-secondary mx-3" role="button">Comentarios</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}