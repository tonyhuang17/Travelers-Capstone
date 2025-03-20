import React from 'react';
import "./Item.css";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
  } from "react-router-dom";


const Item = (props) => {
    const link = `/shop/${props.data.id}`

    return (
        <Link to={link} className = "btn btn-primary">
            <div className = "card">
                <div className = "card-body">
                    <h5 className = "card-title">{props.data.name}</h5>
                    <img src = {props.data.api_featured_image} width = {125} height = {125}/>
                    <div className = "card-text">{props.data.price}{props.data.price_sign}</div>
                    <div className = "card-text">Rating: {props.data.rating}</div>
                </div>
            </div>
        </Link>
    );
};

export default Item;