import React from 'react';
import CartItem from './CartItem.jsx';
import './Shop.css';

const Cart = (props) => {

    if(props.data){
        return (
            <div className = "card-container"style = {{display: "flex", flexDirection: "column"}} >
                {
                    props.data.map((cartItem) => (
                    <CartItem key = {cartItem.id} data = {cartItem} />
                ))}
            </div>
        )
    }
};

export default Cart;