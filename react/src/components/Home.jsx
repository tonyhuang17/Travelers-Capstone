import React from 'react'
import img from "../assets/homeBackground.jpg"

const Home = () => {
    return (
        <div style = {{backgroundImage: `url(${img})`}}>
            <h1>HOMEPAGE</h1>
        </div>
    );
};

export default Home;