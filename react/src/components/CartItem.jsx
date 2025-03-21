import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './Cosmetic.css'

const CartItem = (props) => {
    const[count, setCount] = useState(props.data.quantity);

    const handlePlusClick = (e) => {
        setCount(count + 1);
        console.log(count);
        e.preventDefault();
        fetch(`http://localhost:3000/cartProducts/${props.data.id}`, {
            method: "PUT",
            body: JSON.stringify(count),
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

    const handleMinusClick = (e) => {
        if(count >= 1){
            setCount(count - 1);

            e.preventDefault();
            fetch(`http://localhost:3000/cartProducts/${props.data.id}`, {
                method: "PUT",
                body: JSON.stringify(count),
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
    }

    return (
        <div className = 'containerShop'>
            <div className = "left">
                <img src = {props.data.api_featured_image} width = {250} height = {250}/>
            </div>
            <div className = 'right'>
                <div className = 'left mediumShop'>
                    <h5 className = "shop-title-text playfair">{props.data.name}</h5>
                    <div className = "other-text">{props.data.price_sign}{props.data.price}</div>
                </div>
                <div className = 'right'>
                    <button className = "btn btn-outline-success" onClick = {handleMinusClick}>-</button>
                    <button className = "btn bottom"> {count} </button>
                    <button className = "btn btn-outline-success" onClick = {handlePlusClick}>+</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem;