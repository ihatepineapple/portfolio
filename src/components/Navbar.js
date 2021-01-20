import React from "react";
import { Link } from "react-router-dom";
// import { ExternalLink } from 'react-external-link';
import Mailto from 'reactv16-mailto';

const NavBar = () => {
    return (
        <nav>
            <ul className="navbar-list">
                <li><Link to="/work" className="menu-btn">Work</Link></li>
                <li><Link to="/about" className="menu-btn">About</Link></li>
                <li><Mailto email="ihatepineapple@gmail.com" className="menu-btn" obfuscate={true}>Contact</Mailto></li>
            </ul>
        </nav>
    )
}

export default NavBar