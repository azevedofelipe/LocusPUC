import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import LoginContext from '../services/loginContext'
import { BrowserRouter } from 'react-router-dom'

import Nav from '../components/templates/Nav'
import Paths from './Paths'
import { Component } from 'react'

export default class App extends Component {

  setLogged = (userUid) => {
    this.setState({ userUid })
  }

  state = {
    userUid: '',
    setLogged: this.setLogged
  }

  render() {
    return (
      <BrowserRouter>
        <LoginContext.Provider value={this.state}>
          <main>
            <Nav />
            <Paths />
          </main>
        </LoginContext.Provider>
      </BrowserRouter>
    )
  }
}
