import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <ul className="navbar-list">
                <li><Link to="/work" className="menu-btn">Work</Link></li>
                <li><Link to="/about" className="menu-btn">About</Link></li>
                <li><Link to="#" className="menu-btn">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar