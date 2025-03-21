import React from 'react';
import "./Item_recom.css";

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
  } from "react-router-dom";


  const Item = ({ data }) => {
    const link = `/shop/${data.id}`;

    return (
        <Link to={link} className="recommend-card-link">
            <div className="recommend-card">
                <img src={data.api_featured_image} alt={data.name} width={100} height={100} />
                <h5 className="card-title playfair">{data.name}</h5>
                <div className="price-rating">
                    <span className="price">{data.price_sign}{data.price}</span>
                    <span className="rating"> {data.rating || "N/A"}/5</span>
                </div>
            </div>
        </Link>
    );
};

export default Item;

