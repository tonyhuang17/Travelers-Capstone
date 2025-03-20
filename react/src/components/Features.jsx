import React, { useState, useEffect } from "react";

const Features = () => {
    const [Features, setFeatures] = useState([]);

    // Fetch products and select 10 random ones
    useEffect(() => {
        fetch("http://localhost:5000/") // Fetch from Flask API
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
                {featuredProducts.length > 0 ? (
                    featuredProducts.map(featuredProducts => (
                        <div key={featuredProducts.id} className="featured-item">
                            <h3>{featuredProducts.name}</h3>
                            <p>{featuredProducts.brand}</p>
                            <p>${featuredProducts.price}</p>
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

