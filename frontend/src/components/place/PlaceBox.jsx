import { Component } from "react";
import './PlaceBox.css'

export default class PlaceBox extends Component {
  render() {
    return (
      <div className="box bg-light row g-0">
        <div className='thumb col-6'>
          <img src={this.props.thumb} alt="Imagem do Lugar" />
        </div>
        <div className="col-6 px-2 py-2 d-flex flex-column justify-content-between">
          <div className="title">
            {this.props.titulo}
          </div>
          <div className='author'>
            Autor: {this.props.autor}
          </div>
          <div className="content">
            {this.props.descricao}
          </div>
          <div className="content">
            Tags: {this.props.tags.join(' ')}
          </div >
          <div className="d-flex justify-content-between content">
            <div>
              Likes: {this.props.likes_count}
            </div>
            <div>
              Dislikes: {this.props.dislikes_count}
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