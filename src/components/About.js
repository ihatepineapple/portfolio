import React from 'react';
import { Link } from "react-router-dom";
import NavBar from "./Navbar";
import { ExternalLink } from 'react-external-link';

const About = () => {
    return (
        <div>
            <NavBar />
            <div className="wrapper">
                <div className="article-wrap">
                    <h2>Who am I?</h2>
                    <p className="about-info">My name is Irene Asensio. I’m from Barcelona, and have been living in Amsterdam for almost 8 years. 
                    I recently did a career switch from Graphic Design to Web Development. I could define myself as creative and responsible. 
                    I am a problem solver but also very empathic- I always try to check all sides of a problem from different angles to approach 
                    the best solution.</p>
                </div>
                <div className="article-wrap">
                    <h2>Technologies</h2>
                    <p className="about-info"><span>Front End: </span>HTML, CSS, , SCSS, JavaScript (ES6), React <br/>
                    <span>Back End: </span>ExpressJS, NodeJS, MongoDB <br/>
                    <span>Other Softwares: </span>
                    Adobe Photoshop, Adobe Illustrator, Adobe InDesign, Version Control (Git and Github)
                    </p>
                    <ExternalLink to="https://www.linkedin.com/in/ireneasensio/" className="btn-round">Check my Linkedin</ExternalLink>
                    <ExternalLink to="https://github.com/ihatepineapple/" className="btn-round">Check my Github</ExternalLink>
                </div>
                <div className="btn-wrapper-back">
                    <Link to="/" className="menu-btn">Go Back</Link>   
                </div> 
            </div>
        </div>
    )

}

export default About;