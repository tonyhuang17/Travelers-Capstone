import React, {useState} from 'react'
import DropdownList from './DropdownList';

const Category = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [categoryProduct, setCategoryProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleDropdown = (event) => {
        console.log('Selected ', event.target.value);
        setSelectedCategory(event.target.value);
    };

    const handleClick = async () => {
        if (!selectedCategory) {
            alert('Select a category');
            return;
        }
        
        setLoading(true);
        setError(null);

        fetch(`http://localhost:3000/allProducts/product_type`, {
            method: "POST",
            body: JSON.stringify(selectedCategory),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => response.json())
        .then((data) => {
            setCategoryProduct(data);
        })
        .catch((error) => {
            setError('Error fetching items.');
        });

        setLoading(false);
    };

    return (
        <div>
            <DropdownList selectedValue = {selectedCategory} onChange = {handleDropdown}/>
            <button onClick = {handleClick} disabled = {loading}>{loading ? 'Searching...' : 'Search'}</button>
            {error && <div style = {{ color: 'red'}}>{error}</div>}

            {categoryProduct.length > 0 && (
                <div>
                    <ul>
                    {
                        categoryProduct.map((item) => (
                            <Item key = {item.id} data = {item} />
                        ))
                    }
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Category;
