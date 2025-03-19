import React from 'react'

const Item = (props) => {
    return (
        <div className = "card">
            <div className = "card-body">
                <h5 className = "card-title">{props.data.name}</h5>
                <div className = "card-text">{props.data.price}{props.data.price_sign}</div>
                <div className = "card-text">Rating: {props.data.rating}</div>
            </div>
        </div>
    );
};

export default Item;