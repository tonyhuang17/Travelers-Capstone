import React from 'react';
import Item from "./Item.jsx";
import './Shop.css';

const Shop = (props) => {
    return (
        <div className = "card-container">
            {
                props.data.map((item) => (
                    <Item key = {item.id} data = {item} />
                ))
            }
        </div>
    );
};

export default Shop;