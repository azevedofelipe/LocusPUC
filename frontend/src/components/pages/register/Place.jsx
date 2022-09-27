import './Place.css'
import { Component } from 'react'
import Main from '../../templates/Main'

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
              <input type='text' placeholder='Nome do local' required />
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
              <strong>Tag do Local </strong><br />
              <fieldset>
                <div>
                  <input type="checkbox" id="socialize" name="Socializar" />
                  <label for="socialize"> Socializar</label>
                </div>

                <div>
                  <input type="checkbox" id="eat" name="Comer" />
                  <label for="eat"> Comer</label>
                </div>

                <div>
                  <input type="checkbox" id="study" name="Estudar" />
                  <label for="study"> Estudar</label>
                </div>
              </fieldset>
            </li>
            <li>
              <strong>Descrição</strong><br />
              <textarea cols='25' rows='3' placeholder='Breve descrição' required></textarea>
            </li>
            <li>
              <input type="file" id="files" class="hidden" required />
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