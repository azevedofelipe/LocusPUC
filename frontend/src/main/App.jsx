import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'font-awesome/css/font-awesome.min.css'
import LoginContext from '../context/loginContext'
import { BrowserRouter } from 'react-router-dom'

import Nav from '../templates/Nav'
import Paths from './Paths'
import { Component } from 'react'

export default class App extends Component {

  setLogged = (userId, userKey , username) => {
    this.setState({ userId, userKey, username })
  }

  state = {
    userId: -1,
    userKey: '',
    username: '',
    setLogged: this.setLogged
  }

  render() {
    return (
      <BrowserRouter>
        <LoginContext.Provider value={this.state}>
          <main>
            <a className='skip_nav' href='#maincontent'>Pular para conteudo principal</a>
            <Nav />
            <Paths id='maincontent' />
          </main>
        </LoginContext.Provider>
      </BrowserRouter>
    )
  }
}
