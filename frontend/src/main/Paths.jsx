import { Routes, Route } from "react-router-dom"

import Account from '../components/pages/register/Account'
import Place from '../components/pages/register/Place'
import Categories from '../components/pages/categories/Categories'
import Home from '../components/pages/home/Home'

export default function Paths() {
  return (
    <Routes>
      <Route exact path="/" element={<Home color="white" />} />
      <Route path="/registrarConta" element={<Account />} />
      <Route path="/registrarLugar" element={<Place />} />
      <Route path="/categorias" element={<Categories />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}