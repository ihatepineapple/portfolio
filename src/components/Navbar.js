import React from "react";
import { Link } from "react-router-dom";
import Mailto from 'reactv16-mailto';

const NavBar = () => {
    return (
        <nav>
            <div className="navbar-list">
                <Link to="/work" ><button className="menu-btn">Work</button></Link>
                <Link to="/about" ><button className="menu-btn">About</button></Link>
                <Mailto email="ihatepineapple@gmail.com"  obfuscate={true}><button className="menu-btn">Contact</button></Mailto>
            </div>
        </nav>
    )
}

export default NavBar