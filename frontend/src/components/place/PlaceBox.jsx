import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-regular-svg-icons";
import LoginContext from '../../services/loginContext'
import './PlaceBox.css'

library.add(faThumbsUp)
library.add(faThumbsDown)
export default class PlaceBox extends Component {
  static contextType = LoginContext

  constructor(props) {
    super(props)
    this.setValuation = this.setValuation.bind(this)
  }

  setValuation(e, vote) {
    if (!!this.context.userKey === false)
      return
    console.log('context', this.context)

    const optionsPost = {
      method: 'post',
      headers: new Headers({ 
        'Authorization': `Token ${this.context.userKey}` ,
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({ user: this.context.userId, lugar: this.props.placeId, voto: vote })
    }
    fetch('http://127.0.0.1:8000/api/lugar/likes/', optionsPost)
      .then(resp => resp.json())
      .then(obj => {
        console.log('post', obj)
      })
      .catch(e => {
        fetch(`http://127.0.0.1:8000/api/lugar/likes/`)
          .then(resp => resp.json())
          .then(obj => {
            console.log('put', obj)
          })
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
              <FontAwesomeIcon icon={faThumbsUp} size='2x'/><span className="valuationFontSize">{this.props.likes_count}</span>
            </div>
            <div className="icon d-flex justify-content-between align-items-center" onClick={e => this.setValuation(e, -1)}>
              <FontAwesomeIcon icon={faThumbsDown} size='2x'/><span className="valuationFontSize">{this.props.dislikes_count}</span>
            </div>
            <div>
              <button>Comentarios</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}