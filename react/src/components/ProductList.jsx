import React, { useState, useEffect } from "react";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [recommendedProducts, setRecommendedProducts] = useState([]);

    // Fetch products from Flask API using fetch()
    useEffect(() => {
        fetch("http://localhost:5000/recommend")
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error("Error fetching products:", error));
    }, []);

    // Fetch recommended products when a product is clicked
    const getRecommendations = (productId) => {
        fetch("http://localhost:5000/recommend?product_id=${productId}")
            .then(response => response.json())
            .then(data => setRecommendedProducts(data.recommended_product_ids))
            .catch(error => console.error("Error fetching recommendations:", error));
    };

    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id} onClick={() => getRecommendations(product.id )} style={{ cursor: "pointer", color: "blue" }}>
                        {product.name} - {product.brand} - ${product.price}
                    </li>
                ))}
            </ul>

            <h2>Recommended Products</h2>
            <ul>
                {recommendedProducts.length > 0 ? (
                    recommendedProducts.map(id => <li key={id}>Product ID: {id}</li>)
                ) : (
                    <p>Click a product to see recommendations</p>
                )}
            </ul>
        </div>
    );
};

export default ProductList;
