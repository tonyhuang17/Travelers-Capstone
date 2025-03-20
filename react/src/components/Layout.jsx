import React from 'react'
import Header from './Header'
import Cart from './Cart'
import { Outlet } from 'react-router-dom'


const Layout = () => {
    return (
        <div className = 'bg-zinc-200'>
            <main className = 'w-[1200px] max-w-full m-auto p-5'> 
                <Header />
                <Outlet />
            </main>
            <Cart />
        </div>
    )
}

export default Layout;