import { Routes, Route } from "react-router-dom"

import Account from '../components/pages/register/Account'
import Event from '../components/pages/register/Event'
import Place from '../components/pages/register/Place'
import Categories from '../components/pages/categories/Categories'
import Recover from '../components/pages/recoverPassword/Recover'
import Home from '../components/pages/home/Home'

export default function Paths() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/registrarConta" element={<Account />} />
      <Route path="/registrarEvento" element={<Event />} />
      <Route path="/registrarLugar" element={<Place />} />
      <Route path="/categorias" element={<Categories />} />
      <Route path="/recuperar" element={<Recover />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}