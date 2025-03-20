import React, { useState, useEffect } from 'react'

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
            <h2>Recommended Products</h2>
           

            Hello
        </div>
    );
};

export default Recommend;
