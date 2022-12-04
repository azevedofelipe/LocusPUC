import { Component } from "react";
import './CommentBox.css'

export default class EventBox extends Component {
  render() {
    return (
      <div className="comment-box row bg-secondary card mb-3">
        <div className="card-body">
          <h5 className="card-title">{this.props.autor}:</h5>
          <p className="card-text">{this.props.texto}</p>
        </div>
      </div>
    )
  }
}