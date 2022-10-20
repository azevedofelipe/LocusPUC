import './Place.css'
import { Component } from 'react'
import Main from '../../templates/Main'

export default class Place extends Component {

  state = {
    image: undefined
  }

  constructor(props) {
    super(props)
    this.previewImage = this.previewImage.bind(this)
  }

  previewImage(e) {
    this.setState({ image: URL.createObjectURL(e.target.files[0]) })
  }
  
  render() {
    return (
      <Main>
        <div className='register-place'>
          <div className='row'>
            <div className='col-md-5 col'>
              <h1>Registre novo local</h1>
              <hr />
              <form>
                <ul>
                  <li>
                    <strong>Nome do Local</strong>
                    <br />
                    <input type='text' placeholder='Nome do local' required />
                  </li>
                  <li>
                    <strong>Tipo do Local </strong><br />
                    <select className='px-2'>
                      <option value='socializar'> Socializar </option>
                      <option value='comer'> Comer</option>
                      <option value='estudar'> Estudar </option>
                    </select>
                  </li>
                  <li><strong>Tag do Local </strong></li>
                  <li className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                    <label className="form-check-label" htmlFor="inlineCheckbox1">Socializar</label>
                  </li>
                  <li className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                    <label className="form-check-label" htmlFor="inlineCheckbox1">Comer</label>
                  </li>
                  <li className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                    <label className="form-check-label" htmlFor="inlineCheckbox1">Estudar</label>
                  </li>
                  <li className="form-group">
                    <br/>
                    <label htmlFor="story"><strong>Descrição</strong></label>
                    <textarea id="story" name="story" rows="5" cols="33" required></textarea>
    
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