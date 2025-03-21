import React, { useState, useEffect } from 'react'
import './App.css'
import item_data from './assets/updated_products.json'
import Item from "./components/Item"
import History from "./components/History"
import Search from "./components/Search"
import Home from "./components/Home"
import About from "./components/About"
import Shop from "./components/Shop"
import Recommend from "./components/Recommend"
import ProductList from "./components/ProductList"
import Features from "./components/Features"
import Layout from "./components/Layout"
import Cosmetic from "./components/Cosmetic"
import Cart from "./components/Cart"
import iconCart from "./assets/iconCart.png"
import clipboard from "./assets/clipboard.png"
import LoginForm from "./components/LoginForm"
import RequireAuth from "./components/RequireAuth"
import { AuthProvider } from "./hooks/AuthContext"
import Category from "./components/Category"

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {

  const[data, setData] = useState([]);
  const[cartInfo, setCartInfo] = useState([]);
  const[history, setHistory] = useState([]);

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
    const fetchCartInfo = async () => {
        try {
            const response = await fetch("http://localhost:3000/allProducts/Cart");
            if (!response.ok) {
                throw new Error('Data could not be fetched!');
            }
            const json_response = await response.json();
            setCartInfo(json_response);
        } catch (error) {
            console.error('Error fetching cart:', error);
        }
    };

    fetchCartInfo();
  }, [cartInfo]);

  useEffect(() => {
    const fetchHistory= async () => {
        try {
            const response = await fetch("http://localhost:3000/History");
            if (!response.ok) {
                throw new Error('Data could not be fetched!');
            }
            const json_response = await response.json();
            setHistory(json_response);
        } catch (error) {
            console.error('Error fetching history:', error);
        }
    };

    fetchHistory();
  }, [history]);

  return (
    <>
    <Router>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <h1 className = 'playfair'>LOREM IPSUM</h1>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <button className = 'button' style = {{marginLeft : "300px"}}>Home</button>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  <button className = 'button'>About</button>
                </Link>
              </li>
              <li className="nav-item">
                <Link className = "nav-link" to = "/shop">
                  <button className = 'button'>Shop</button>
                </Link>
              </li>
              <li className="nav-item">
                <Link className = "nav-link" to = "/category">
                  <button className = 'button'>Category</button>
                </Link>
              </li>
              <li className = "nav-item">
                <Link className = 'nav-link' to='/cart'>
                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginLeft: '175px'}}>
                    <img src={iconCart} alt = "" width={50} height={50}/>
                  </div>
                </Link>
              </li>
              <li className = "nav-item">
                <Link className = 'nav-link' to='/history'>
                  <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
                    <img src={clipboard} alt = "" width={50} height={50}/>
                  </div>
                </Link>
              </li>
            </ul>
            <Search setData = {setData}/>
          </div>
        </div>
      </nav>
      <main>
        <div>
          <Routes>
              <Route exact path = "/" element = {<Home />} />
              <Route path = "/about" element = {<About />} />
              <Route exact path = "/shop" element = {<Shop data = {data}/>} />
              <Route path = "/shop/:id" element = {<Cosmetic/>} />
              <Route path = "/cart" element = {<Cart data = {cartInfo}/>} />
              <Route path = "/shop/search" element = {<Shop data = {data}/>}/>
              <Route path="/login" element={<LoginForm />} />
              <Route path="/category" element = {<Category />} />
              <Route path = "/history" element = {<History data = {history}/>} />
          </Routes> 
        </div>
      </main>
    </Router>
    </>
  )
}


export default App