import React, { useState, useEffect } from "react";

const Features = () => {
    const [Features, setFeatures] = useState([]);

    // Fetch products and select 10 random ones
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}`) // Fetch from Flask API
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
            <div className="featured-list">
                {Features.length > 0 ? (
                    Features.map(Features => (
                        <div key={Features.id} className="featured-item">
                            <h3>{Features.name}</h3>
                            <p>{Features.brand}</p>
                            <p>${Features.price}</p>
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

