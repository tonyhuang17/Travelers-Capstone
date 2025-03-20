import React from 'react'

const Cosmetic = (props) => {
    return(
        <div className = "card">
            <div className = "card-body">
                <h5 className = "card-title">{props.data.name}</h5>
                <img src = {props.data.api_featured_image} width = {125} height = {125}/>
                <div className = "card-text">{props.data.price}{props.data.price_sign}</div>
                <div className = "card-text">Rating: {props.data.rating}</div>
            </div>
        </div>
    )
}

export default Cosmetic;