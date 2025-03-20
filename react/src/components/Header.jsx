import React from 'react'
import iconCart from '../assets/iconCart.png'

const Header = () => {
    return (
        <header className = 'flex justify-between items-center mb-5'>
            <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
                <img src={iconCart} alt = "" width={50} height={50}/>
                <span className = 'absolute top-2/3 right-1/2 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center'>0</span>
            </div>
        </header>
    )
}

export default Header