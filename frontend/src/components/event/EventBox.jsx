import { Component } from "react";
import './EventBox.css'

export default class EventBox extends Component {
  data = this.props.data
  render() {
    return (
      <div className="event-box row bg-success card mb-3">
        <div className="card-body">
          <h5 className="card-title">{this.props.titulo}</h5>
          <p className="card-text">Descrição: {this.props.descricao}</p>
          <p className='card-text'>Data: {this.props.data}</p>
        </div>
      </div>
    )
  }
}