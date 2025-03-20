import React, { useState, useEffect } from 'react'
import './App.css'
import item_data from './assets/updated_products.json'
import Item from "./components/Item"
import Search from "./components/Search"
import Home from "./components/Home"
import About from "./components/About"
import Shop from "./components/Shop"
import Recommend from "./components/Recommend"
import Features from "./components/Features"
import Cosmetic from "./components/Cosmetic"

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {

  const[data, setData] = useState([]);
  const[id, setId] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch(import.meta.env.VITE_API_URL);
            if (!response.ok) {
                throw new Error('Data could not be fetched!');
            }
            const json_response = await response.json();
            setData(json_response);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchId = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/:id`);
            if (!response.ok) {
              throw new Error('Data could not be fetched!');
            }
            const json_response = await response.json();
            setId(json_response);
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    };

    fetchId();
  }, [])

  return (
    <>
    <Router>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <h1>LOREM IPSUM</h1>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className = "nav-link" to = "/shop">
                  Shop
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main>
        <div>
          <Routes>
            <Route exact path = "/" element = {<Home />} />
            <Route path = "/about" element = {<About />} />
            <Route exact path = "/shop" element = {<Shop data = {data}/>} />
            <Route path = "/shop/:id" element = {<Cosmetic data = {id}/>} />
          </Routes> 
        </div>
      </main>
    </Router>
    </>
  )
}


export default App