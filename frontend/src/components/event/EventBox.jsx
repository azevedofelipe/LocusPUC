import { Component } from "react";
import './EventBox.css'

export default class EventBox extends Component {
  render() {
    return (
      <div className="event-box row bg-success card mb-3">
        <div className="card-body">
          <h5 className="card-title">{this.props.titulo}</h5>
          <p className="card-text d-none">Descrição: {this.props.descricao}</p>
          <p className='card-text'>Data: {this.props.data_hora}</p>
        </div>
      </div>
    )
  }
}