import React from 'react'
import img from "../assets/lips.png"

import Features from './Features'


const Home = () => {
    return (
        <div style = {{backgroundImage: `url(${img})`}}>
            <h1>Welcome to Glamour Beauty</h1>
            <Features />
        </div>
    );
};

export default Home;

