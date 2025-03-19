import { useState } from 'react'
import './App.css'
import item_data from './assets/updated_products.json'
import Item from "./components/Item"
import Search from "./components/Search"

function App() {
  return (
    <div>
      <h3>NATURÁL</h3>
      <Search />
      {
        item_data.map((item) => (
          <Item key = {item.id} data = {item} />
        ))
      }
    </div>
  )
}

export default App
