import './Place.css'
import Main from '../../templates/Main'
import { Component } from 'react'
import imgInicio from '../../assets/imgs/inicio.jpg'
import EventBox from '../../components/event/EventBox'
import LoginContext from '../../context/loginContext'

export default class PlacePage extends Component {
  static contextType = LoginContext

  state = {
    place: {
      id: -1,
      titulo: '',
      descricao: '',
      thumb: '',
      alt_text: '',
      tags: [],
    },
    events: [],
    comments: [],
    comment: '',
  }

  constructor(props) {
    super(props)
    this.fillField = this.fillField.bind(this)
    this.submitComment = this.submitComment.bind(this)
  }

  componentDidMount() {
    const currentUrl = window.location.pathname
    let id
    if (currentUrl.charAt(currentUrl.length-1) !== '/')
      id = currentUrl.charAt(currentUrl.length-1)
    else
      id = currentUrl.charAt(currentUrl.length-2)
    
    fetch('http://127.0.0.1:8000/api/lugar/')
      .then(resp => resp.json())
      .then(places => {
        const placeArr = places.filter((value, idx) => {
          return value['id'] === parseInt(id)
        })
        const place = placeArr[0]
        this.setState({ place })

        fetch('http://127.0.0.1:8000/api/lugar/comentarios')
          .then(respComment => respComment.json())
          .then(objComment => {
            const comments = objComment.filter((value, idx) => {
              return value['lugar'] === this.state.place.id
            })
            this.setState({ comments })
          })
      })

      fetch('http://127.0.0.1:8000/api/eventos/')
        .then(resp => resp.json())
        .then(events => {
          const placeEvent = events.filter(event => event['local'] === parseInt(id))
          if (placeEvent.length === 0)
            this.setState({ events: [{ id: 1, titulo: 'Não Há Eventos Cadastrados', data_hora: '' }] })
          else
            this.setState({ events: placeEvent })
        })
  }
  
  renderEvents() {
    return this.state.events.map(event => {
      return (
        <EventBox key={event.id}
          eventId={event.id} titulo={event.titulo} data={event.data_hora}/>
      )
    })
  }

  renderComments() {
    return this.state.comments.map(comment => {
      return (
        <EventBox key={comment.id}
          eventId={comment.id} titulo={comment.texto} data={comment.autor_nome}/>
      )
    })
  }

  fillField(e) {
    const field = { ...this.state }
    field[e.target.name] = e.target.value
    this.setState(field)
  }

  submitComment(e) {
    e.preventDefault()
    if (!!this.context.userKey === false) {
      alert('Usuário Precisa Estar Logado para Comentar')
      return
    }

    const options = {
      method: 'post',
      headers: new Headers({ 
        'Authorization': `Token ${this.context.userKey}`, 
        'Content-Type': 'application/json' }),
      body: JSON.stringify({ lugar: this.state.place.id, autor: this.context.userId, texto: this.state.comment })
    }
    fetch('http://127.0.0.1:8000/api/lugar/comentarios', options)
      .then(resp => resp.json())
      .then(obj => {
        if ('id' in obj) {
          alert('Comentario Criado com Sucesso')
          fetch('http://127.0.0.1:8000/api/lugar/comentarios')
          .then(respComment => respComment.json())
          .then(objComment => {
            const comments = objComment.filter((value, idx) => {
              return value['lugar'] === this.state.place.id
            })
            this.setState({ comments })
          })
        }
        else
          alert('Não foi possivel criar comentario')
      })
  }

  render() {
    return (
      <Main>
        <div className='lugar'>
          <h1 className='col col-12 '>{this.state.place.titulo}</h1>
          <hr />
          <div className='row'>
            <div className='col-5'><img className='d-none d-xl-block place-thumbnail img-thumbnail' src={imgInicio} alt='Fachada do edifício Cardeal Leme' /></div>
            <div className='col-12 col-xl-6 offset-xl-1'>
              <div id='description'>
                <h2>Descrição</h2>
                <p>{this.state.place.descricao}</p>
              </div>
              <div id='tags'>
                <h2>Tags</h2>
                <p>{this.state.place.tags.join(' ')}</p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div id='comments' className='col-12 col-xl-5'>
              <h2>Comentários</h2>
              <form className='row mb-5' onSubmit={this.submitComment}>
                <input type="text" className='text-dark rounded col-8'
                  name='comment' onChange={this.fillField} value={this.state.comment} required/>
                <button type='submit' className='btn btn-primary offset-1 col-3'>Enviar</button>
              </form>
              <div>
                {this.renderComments()}
              </div>
            </div>
            <div id='events' className='col-12 col-xl-5 offset-xl-1'>
              <h2>Eventos</h2>
              <div>
                {this.renderEvents()}
              </div>
            </div>
          </div>
        </div>
      </Main>
    )
  }
}