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
                    <h5 className = "card-title-text playfair">{props.data.name}</h5>
                    <img src = {props.data.api_featured_image} width = {100} height = {100}/>
                    <div className = "bottom-left-text">{props.data.price_sign}{props.data.price}</div>
                    <div className = "bottom-right-text">Review: {props.data.rating}/5</div>
                </div>
            </div>
        </Link>
    );
};

export default Item;