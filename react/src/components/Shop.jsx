import React from 'react';
import Item from "./Item.jsx";

const Shop = (props) => {
    return (
        <div className = "card-container" style = {{display: 'flex', flexWrap: 'wrap', gap: '20px'}}>
            {
                props.data.map((item) => (
                    <Item key = {item.id} data = {item} />
                ))
            }
        </div>
    );
};

export default Shop;