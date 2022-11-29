import { Component } from "react";
import { Link } from 'react-router-dom'
import LoginContext from '../../context/loginContext'
import './PlaceBox.css'

export default class PlaceBox extends Component {
  static contextType = LoginContext

  state = {
    likes_count: this.props.likes_count,
    dislikes_count: this.props.dislikes_count,
    all_likes: [],
    place_like: '',
    key: ''
  }
  constructor(props) {
    super(props)
    this.setValuation = this.setValuation.bind(this)
  }

  componentDidMount() {
    fetch('http://127.0.0.1:8000/api/lugar/likes/')
      .then(resp => resp.json())
      .then(obj => this.setState({ all_likes: obj }))
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.key !== this.context.userKey) {
      if (!!this.context.userKey === false)
        return
      const user_like = this.state.all_likes.filter((likeObj => {
        return this.context.username === likeObj.user_nome && likeObj.lugar === this.props.placeId
      }))
      if (user_like.length === 0)
        return
      if (user_like[0].voto === 1)
        this.setState({ place_like: '1' })
      else if (user_like[0].voto === -1)
        this.setState({ place_like: '-1' })
      this.setState({ key: this.context.userKey })
    }
  }

  setValuation(e, vote) {
    if (!!this.context.userKey === false)
      return

    const options = {
      headers: new Headers({
        'Authorization': `Token ${this.context.userKey}`,
        'Content-Type': 'application/json'
      })
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
            .then(obj => {
              this.setState({ likes_count: obj['lugar_likes'], dislikes_count: obj['lugar_dislikes'] })
              this.setState({ place_like: vote.toString() })
            })
        }
        else {
          const optionsPut = { method: 'put', ...options }
          if (userLike[0]['voto'] === vote) {
            fetch(`http://127.0.0.1:8000/api/lugar/like/${userLike[0]['id']}`, { ...optionsPut, body: JSON.stringify({ autor: this.context.userId, lugar: this.props.placeId, voto: 0 }) })
              .then(resp => resp.json())
              .then(obj => {
                this.setState({ likes_count: obj['lugar_likes'], dislikes_count: obj['lugar_dislikes'] })
                this.setState({ place_like: '' })
              })
          }
          else {
            fetch(`http://127.0.0.1:8000/api/lugar/like/${userLike[0]['id']}`, { ...optionsPut, body: JSON.stringify({ autor: this.context.userId, lugar: this.props.placeId, voto: vote }) })
              .then(resp => resp.json())
              .then(obj => {
                this.setState({ likes_count: obj['lugar_likes'], dislikes_count: obj['lugar_dislikes'] })
                this.setState({ place_like: vote.toString() })
              })
          }
        }
      })
  }


  render() {
    return (
      <div className="box col-12 col-xl-9 row g-0 bg-dark">
        <div className='d-none d-xl-block thumb col-xl-6'>
          <img src={this.props.thumb} alt="Imagem do Lugar" />
        </div>
        <div className="col-12 col-xl-6 px-3 py-2 d-flex flex-column justify-content-between text-center text-xl-start">
          <div className="title">
            {this.props.titulo}

          </div>
          <div className='author d-none d-xl-block'>
            Autor: {this.props.autor}
          </div>
          <div className="box-content">
            {this.props.descricao.length < 125 ? this.props.descricao : `${this.props.descricao.slice(0, 125)} ...`}
          </div>
          <div className="box-content">
            Tags: {this.props.tags.join(' ')}
          </div >
          <div className="d-flex justify-content-between box-content">
            <div className="icon d-flex justify-content-between align-items-center" onClick={e => this.setValuation(e, 1)}>
              <i className={`fa fa-sharp fa-solid fa-thumbs-up ${this.state.place_like === '1' ? 'likeVoted' : ''} ${!!this.context.userKey === true ? 'like' : ''}`} /><span className="valuationFontSize px-2">{this.state.likes_count}</span>
            </div>
            <div className="icon d-flex justify-content-between align-items-center" onClick={e => this.setValuation(e, -1)}>
              <i className={`fa fa-sharp fa-solid fa-thumbs-down ${this.state.place_like === '-1' ? 'dislikeVoted' : ''} ${!!this.context.userKey === true ? 'dislike' : ''}`} /><span className="valuationFontSize px-2">{this.state.dislikes_count}</span>
            </div>
            <div>
              <Link to={`/lugares/${this.props.placeId}`} className="btn btn-secondary mx-3" role="button">
                Detalhes
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}