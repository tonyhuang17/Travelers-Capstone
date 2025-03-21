import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import "./Cosmetic.css";
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

    const handleClick = (e) => {
            e.preventDefault();
            fetch(`http://localhost:3000/allProducts`, {
                method: "POST",
                body: JSON.stringify({ product, quantity:count }),
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
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
            <div className = 'containerLarge bottomSpace'>
                <div className = "left">
                    <img src = {product?.api_featured_image} width = {400} height = {400}/>
                </div>
                <div className = 'right'>
                    <div className = 'medium left'>
                        <h5 className = "card-title-text playfair bottomSpace">{product?.name}</h5>
                        <div className = 'bottomSpace'>________________________________________</div>
                        <div className = "other-text bottomSpace">{product?.price_sign}{product?.price}</div>
                        <div className = "other-text bottomSpace">Review: {product?.rating}/5</div>
                        <div className = 'bottomSpace'>________________________________________</div>
                        <div className = 'description'>{product?.description}</div>
                    </div>
                    <div className = 'right'>
                        <button className = "btn btn-outline-success" onClick = {handleMinusClick}>-</button>
                        <button className = "btn btn-outline-success bottom" onClick = {handleClick}>Add to Cart: {count}</button>
                        <button className = "btn btn-outline-success" onClick = {handlePlusClick}>+</button>
                    </div>
                </div>
            </div>
            <div className = 'containerLarge'>
                <Recommend productId = {product?.id} />
            </div>
        </div>
    )
}

export default Cosmetic;