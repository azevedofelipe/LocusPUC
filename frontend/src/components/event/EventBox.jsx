import { Component } from "react";
import './EventBox.css'

export default class EventBox extends Component {
  render() {
    return (
      <div className='row my-1 placeholder-box'>
        <p className='my-1 placeholder-text'>{this.props.titulo}</p>
        <p className='my-1 placeholder-text'>{this.props.data}</p>
      </div>
    )
  }
}