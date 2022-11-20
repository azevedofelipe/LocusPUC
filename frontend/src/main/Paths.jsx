import { Routes, Route } from "react-router-dom"

import Account from '../pages/register/Account'
import Event from '../pages/register/Event'
import Place from '../pages/register/Place'
import Categories from '../pages/categories/Categories'
import Recover from '../pages/recoverPassword/Recover'
import Home from '../pages/home/Home'
import { Component } from "react"
import PlacePage from "../pages/place/Place"

export default class Paths extends Component {
  render() {
    return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/registrarConta" element={<Account />} />
        <Route path="/registrarEvento" element={<Event />} />
        <Route path="/registrarLugar" element={<Place />} />
        <Route path="/busca" element={<Categories />} />
        <Route path="/recuperar" element={<Recover />} />
        <Route path="/lugares/:id" element={<PlacePage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    )
  }
}