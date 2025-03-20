import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

const Cosmetic = () => {
    const { id } = useParams();
    const[product, setProduct] = useState();

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

    return(
        <div className = "card">
            <div className = "card-body">
                <h5 className = "card-title">{product?.name}</h5>
                <img src = {product?.api_featured_image} width = {125} height = {125}/>
                <div className = "card-text">{product?.price}{product?.price_sign}</div>
                <div className = "card-text">Rating: {product?.rating}</div>
            </div>
        </div>
    )
}

export default Cosmetic;