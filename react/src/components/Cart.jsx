import React, { createContext, useContext, useState } from 'react';

const Cart = () => {
    const [shoppingCart, setShoppingCart] = useState([]);

    const addItem = (newItem, count) => {

            const curCart = shoppingCart;
            const newCart = curCart.push({item: newItem, count: count})
        setShoppingCart(newCart)
    };

    const removeItem = (newItem) => {

    };

    return (
        <div>
        </div>
    )
}

export default Cart;