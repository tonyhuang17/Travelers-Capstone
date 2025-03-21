import React, { useState, useEffect } from 'react'
import Item from './Item'
import './Recommend.css';
import NewItem from './NewItem'



const Recommend = ({productId}) => {
    const [predictions, setPredictions] = useState([]);

    useEffect(() => {
        const fetchPredictions = async () => {
            await fetch(`${import.meta.env.VITE_FLASK_API_URL}/recommend`, {
                method: "POST",
                body: JSON.stringify({ product_id: productId }),
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    setPredictions(data);
                    console.log(data);
                })
                .catch((error) => {
                    console.error(error);
                })
        };
        if (productId) {
            fetchPredictions();
        }
        
    }, [productId]);

    return (
        <div>
            <h2>If You Like This, We Recommend</h2>
            {predictions.length > 0 ? (
                <div className = 'class-container'>
                    {predictions.map(product => (
                        <Item key = {product.id} data = {product} />
                    ))}
                </div>
            ) : (
                <p>No recommendations available.</p>
            )}
        </div>
    );
};

export default Recommend;