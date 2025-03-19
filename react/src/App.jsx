import { useState } from 'react'
import './App.css'
import item_data from './assets/products.json'
import Item from "./components/Item"

function App() {
  return (
    <div>
      <h3>NATURÁL</h3>
      {
        item_data.map((item) => (
          <Item key = {item.id} data = {item} />
        ))
      }
    </div>
  )
}

export default App
