import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import "./Cosmetic.css";
import Cart from "./Cart";
import Recommend from "./Recommend"

const Cosmetic = () => {
    const { id } = useParams();
    const[product, setProduct] = useState();
    const[count, setCount] = useState(0);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
                if (!response.ok) {
                  throw new Error('Data could not be fetched!');
                }
                const json_response = await response.json();
                setProduct(json_response);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };
    
        fetchProduct();
    }, [id]);

    const handleClick = () => {
        
    }

    const handlePlusClick = () => {
        setCount(count + 1);
    }

    const handleMinusClick = () => {
        if(count >= 1){
            setCount(count - 1);
        }
    }

    return(
        <div>
            <div className = "card">
                <div className = "card-body">
                    <h5 className = "card-title">{product?.name}</h5>
                    <img src = {product?.api_featured_image} width = {125} height = {125}/>
                    <div className = "card-text">{product?.price_sign}{product?.price}</div>
                    <div className = "card-text">Rating: {product?.rating}</div>
                </div>
            </div>
            <button className = "btn" onClick = {handleMinusClick}>-</button>
            <button className = "btn" onClick = {handleClick}>Add to Cart</button>
            <button className = "btn" onClick = {handlePlusClick}>+</button>
            <Recommend productId = {product?.id} />
        </div>
    )
}

export default Cosmetic;