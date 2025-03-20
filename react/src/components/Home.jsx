import React from 'react'
import img from "../assets/homeBackground.jpg"
import Features from './Features'

const Home = () => {
    return (
        <div style = {{backgroundImage: `url(${img})`}}>
            <h1>HOMEPAGE</h1>
            <Features/>
        </div>
    );
};

export default Home;