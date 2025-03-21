import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Search = (props) => {
    const [searchTerm, setSearchTerm] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3000/allProducts/search`, {
            method: "POST",
            body: JSON.stringify({ searchTerm }),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => response.json())
        .then((data) => {
            props.setData(data);
            console.log(data);
        })
        .catch((error) => {
            console.error(error);
        });
        navigate('/shop/search');
    };

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input className="form-control me-2" type="search"
                placeholder="Find Your Beauty Now" aria-label="Search"
                value={searchTerm} onChange={handleChange} />
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
    );
};

export default Search;