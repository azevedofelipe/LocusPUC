import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'

import Header from '../components/templates/Header'
import Paths from './Paths'

export default function App() {
  return (
    <BrowserRouter>
      <main>
        <Header />
        <Paths />
      </main>
    </BrowserRouter>
  )
}
