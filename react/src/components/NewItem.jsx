import React from 'react';
import "./NewItem.css";

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
  } from "react-router-dom";


const NewItem = (props) => {
    const link = `/shop/${props.data.id}`;

    return (
        <Link to={link} className="recommend-card-link">
            <div className="recommend-card">
                <img src={props.data.api_featured_image} alt={props.data.name} width={100} height={100} />
                <h5 className="card-title playfair">{props.data.name}</h5>
                <div className="price-rating">
                    <span className="price">{props.data.price_sign}{props.data.price}</span>
                    <span className="rating"> {props.data.rating}/5</span>
                </div>
            </div>
        </Link>
    );
};

export default NewItem;

