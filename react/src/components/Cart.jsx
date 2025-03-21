import React, {useState, useEffect} from 'react';
import CartItem from './CartItem.jsx';
import './Shop.css';
import './Cosmetic.css'

const Cart = (props) => {
    const [isCheckingOut, setIsCheckingOut] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);

    const calculateTotalPrice = () => {
        return props.data.reduce((total, item) => 
            total + item.price*item.quantity, 0);
    };

    const handleCheckout = async () => {
        setIsCheckingOut(true);

        const total = calculateTotalPrice();
        setTotalPrice(total);

        fetch(`http://localhost:3000/totalCart`, {
            method: "POST",
            body: JSON.stringify({ totalPrice: totalPrice }),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error(error);
        });

        fetch(`http://localhost:3000/cartProducts`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error(error);
        });
    }

    if(props.data){
        return (
            <div className = "card-container" style = {{display: "flex", flexDirection: "column"}} >
                {
                    props.data.map((cartItem) => (
                    <CartItem key = {cartItem.id} data = {cartItem} />
                ))}
                
                {isCheckingOut ? (
                    <div>
                        <p>Processing Checkout...</p>
                        <p>Total Price: ${totalPrice}</p>
                    </div>
                ) : (
                    <button onClick={handleCheckout}>Checkout</button>
                )}
            </div>
        )
    }
};

export default Cart;