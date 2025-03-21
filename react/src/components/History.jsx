import React from 'react';

const History = (props) => {
    return (
        <div className = 'class-container'>
        {
            props.data.map(item)(
                <p>Purchase ID: {item.ObjectID}, Price: {item.totalPrice}</p>
            )
        }
        </div>
    )
}

export default History;