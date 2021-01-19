import React from 'react';
import { Link } from "react-router-dom";
import NavBar from "./Navbar";


function Home() {

    return (
        <div>
            <NavBar />
            <div className="home-wrapper">
                <h1>Hello, <br />I'm Irene</h1>
                <h2>Full Stack Developer</h2>
            </div>
        </div>
    )
}

export default Home
