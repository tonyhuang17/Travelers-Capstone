import React, { useState, useEffect } from "react";

const FeaturedProducts = () => {
    const [featuredProducts, setFeaturedProducts] = useState([]);

    // Fetch products and select 10 random ones
    useEffect(() => {
        fetch("http://localhost:5000/") // Fetch from Flask API
            .then(response => response.json())
            .then(data => {
                const shuffled = data.sort(() => 0.5 - Math.random()); // Shuffle array
                setFeaturedProducts(shuffled.slice(0, 10)); // Pick 10 random products
            })
            .catch(error => console.error("Error fetching featured products:", error));
    }, []);

    return (
        <div className="featured-container">
            <h2>Featured Products</h2>
            <div className="featured-list">
                {featuredProducts.length > 0 ? (
                    featuredProducts.map(product => (
                        <div key={product.id} className="featured-item">
                            <h3>{product.name}</h3>
                            <p>{product.brand}</p>
                            <p>${product.price}</p>
                        </div>
                    ))
                ) : (
                    <p>Loading featured products...</p>
                )}
            </div>
        </div>
    );
};

export default FeaturedProducts;

