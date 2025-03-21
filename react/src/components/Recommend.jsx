import React, { useState, useEffect } from 'react'
import "./Recommend.css"

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

console.log(predictions[0]);

return (
    <div className="recommend-container">
        <h2>Recommended Products</h2>
        <div className="recommend-grid">
            {predictions.length > 0 ? (
                predictions.map((product) => (
                    <div key={product.id} className="recommend-item">
                        <img src={product?.api_featured_image} width={125} height={125}/>
                        <h3>{product.name}</h3>
                        <p>{product.brand}</p>
                        <p>${product.price}</p>
                    </div>
                ))
            ) : (
                <p>No recommendations available.</p>
            )}
        </div>
    </div>
);
};

export default Recommend;