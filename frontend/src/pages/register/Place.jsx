import './Place.css'
import { Component } from 'react'
import Main from '../../templates/Main'
import LoginContext from '../../context/loginContext'


export default class Place extends Component {
  static contextType = LoginContext

  state = {
    image: undefined,
    title: '',
    description: '',
  }

  constructor(props) {
    super(props)
    this.fillField = this.fillField.bind(this)
    this.previewImage = this.previewImage.bind(this)
    this.submitPlace = this.submitPlace.bind(this)
  }

  fillField(e) {
    const field = { ...this.state }
    field[e.target.name] = e.target.value
    this.setState(field)
  }

  previewImage(e) {
    this.setState({ image: URL.createObjectURL(e.target.files[0]) })
  }

  submitPlace(e) {
    e.preventDefault()

    const tags = new Set()
    tags.add(e.target[1].value)
    if (e.target[2].checked)
      tags.add(e.target[2].value)
    if (e.target[3].checked)
      tags.add(e.target[3].value)
    if (e.target[4].checked)
      tags.add(e.target[4].value)

    const optionsPost = {
      method: 'post',
      headers: new Headers({ 
        'Authorization': `Token ${this.context.userKey}` ,
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({ autor: this.context.userId, lugar: this.props.placeId, titulo: this.state.title, descricao: this.state.description, tags: Array.from(tags) })
    }
    fetch('http://127.0.0.1:8000/api/lugar/', optionsPost)
  }
  
  render() {
    return (
      <Main>
        <div className='register-place'>
          <div className='row'>
            <div className='col-md-5 col'>
              <h1>Registre novo local</h1>
              <hr />
              <form onSubmit={this.submitPlace}>
                <ul>
                  <li>
                    <strong>Nome do Local</strong>
                    <br />
                    <input type='text' placeholder='Nome do local' required 
                      name='title' onChange={this.fillField} value={this.state.title}/>
                  </li>
                  <li>
                    <strong>Tipo do Local </strong><br />
                    <select className='px-2'>
                      <option value='Socializar'> Socializar </option>
                      <option value='Comer'> Comer</option>
                      <option value='Estudar'> Estudar </option>
                    </select>
                  </li>
                  <li><strong>Tag do Local </strong></li>
                  <li className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value='Socializar'/>
                    <label className="form-check-label" htmlFor="inlineCheckbox1">Socializar</label>
                  </li>
                  <li className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value='Comer'/>
                    <label className="form-check-label" htmlFor="inlineCheckbox2">Comer</label>
                  </li>
                  <li className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value='Estudar'/>
                    <label className="form-check-label" htmlFor="inlineCheckbox3">Estudar</label>
                  </li>
                  <li className="form-group">
                    <br/>
                    <label htmlFor="story"><strong>Descrição</strong></label>
                    <textarea id="story" rows="5" cols="33" required
                      name='description' onChange={this.fillField} value={this.state.description}
                      ></textarea>
                  </li>
                  <li>
                    <input type="file" id="files" className="hidden" onChange={this.previewImage} required />
                    <label className='especifico btn btn-success' htmlFor="files">Escolha Imagem</label>
                  </li>
                  <li>
                    <button className='btn btn-secondary btn-lg'> Registrar Local</button>
                  </li>
                </ul>
              </form>
            </div>
            <div className='imagePreview col-md-7 col-12 my-auto'>
              <img src={this.state.image} alt='preview'/>
            </div>
          </div>
        </div>
      </Main>
    )
  }
}