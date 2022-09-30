import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'

import Nav from '../components/templates/Nav'
import Paths from './Paths'

export default function App() {
  return (
    <BrowserRouter>
      <main>
        <Nav />
        <Paths />
      </main>
    </BrowserRouter>
  )
}
