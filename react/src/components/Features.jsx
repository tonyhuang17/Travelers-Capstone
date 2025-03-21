import React, { useState, useEffect } from "react";
import "./Features.css"
import { useNavigate } from 'react-router-dom';

const Features = () => {
    const [features, setFeatures] = useState([]);

    const navigate = useNavigate();

    // Fetch products and select 10 random ones
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}`) 
            .then(response => response.json())
            .then(data => {
                const shuffled = data.sort(() => 0.5 - Math.random()); // Shuffle array
                setFeatures(shuffled.slice(0, 10)); // Pick 10 random products
            })
            .catch(error => console.error("Error fetching featured products:", error));
    }, []);


return (
    <div className="featured-container">
        <h2>Featured Products</h2>
        <div className = "card-container" style = {{display: 'flex', flexWrap: 'wrap', gap: '20px'}}>
            {features.length > 0 ? (
                features.map((feature) => (
                    <div key={feature.id} className="featured-item" onClick={() => navigate(`/shop/${feature.id}`)}>
                        <img src = {feature?.api_featured_image} width = {125} height = {125}/>
                        <h3>{feature.name}</h3>
                        <p>{feature.brand}</p>
                        <p>${feature.price}</p>
                    </div>
                ))
            ) : (
                <p>Loading featured products...</p>
            )}
        </div>
    </div>
);
};

export default Features;


