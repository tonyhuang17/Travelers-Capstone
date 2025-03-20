import React, {useState} from 'react'

const Search = (props) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${import.meta.env.VITE_API_URL}/search`, {
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
    };

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        console.log(searchTerm);
    };

    return (
        <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input className="form-control me-2" type="search"
                placeholder="Search" aria-label="Search"
                value={searchTerm} onChange={handleChange} />
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
    );
};

export default Search;