import { Routes, Route } from "react-router-dom"

import Account from '../components/register/Account'
import Place from '../components/register/Place'
import Categories from '../components/categories/Categories'
import Home from '../components/home/Home'

export default function Paths() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/registrarConta" element={<Account />} />
      <Route path="/registrarLugar" element={<Place />} />
      <Route path="/categorias" element={<Categories />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}