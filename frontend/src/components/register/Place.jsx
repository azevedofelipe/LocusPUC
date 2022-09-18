import './Place.css'
import { Component } from 'react'
import Main from '../templates/Main'

export default class Place extends Component {

  render() {
    return (
      <Main>
        <h1 className="display-4 px-3"> <strong>Registre novo local</strong></h1>
        <hr />
        <form>
          <ul>
            <li>
              <strong>Nome do Local</strong><br />
              <input type='text' placeholder='Nome do local' />
            </li>
            <li>
              <strong>Tipo do Local </strong><br />
              <select className='px-2'>
                <option value='socializar'> socializar </option>
                <option value='comer'> comer</option>
                <option value='estudar'>estudar </option>
              </select>
            </li>
            <li>
              <strong>Descrição</strong><br />
              <textarea cols='25' rows='3' placeholder='Breve descrição'></textarea>
            </li>
            <li>
              <input type="file" id="files" className="hidden"/>
              <label className='especifico btn btn-secondary' htmlFor="files">Escolha Imagem</label>
            </li>
            <li>
              <button className='btn btn-secondary btn-lg'> Registrar     Local</button>
            </li>
          </ul> 
        </form>
      </Main>
    )
  }
}