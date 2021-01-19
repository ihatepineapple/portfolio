import React from 'react';
import { Link } from "react-router-dom";
import NavBar from "./Navbar";

const About = () => {
    return (
        <div>
            <NavBar />
            <div>
                <h2>Who am I?</h2>
                <p>My name is Irene Asensio. I’m from Barcelona, and have been living in Amsterdam for almost 8 years. 
                I recently did a career switch from Graphic Design to Web Development. I could define myself as creative and responsible. 
                I am a problem solver but also very empathic- I always try to check all sides of a problem from different angles to approach 
                the best solution.</p>
            </div>
            <div>
                <h2>Technologies</h2>
                <p><span>Front End:</span>HTML, CSS, , SCSS, JavaScript (ES6), React, Bootstrap
                <span>Back End:</span>ExpressJs, NodeJS, MongoDb
                <span>Other Softwares:</span>
                Adobe Photoshop, Adobe Illustrator, Adobe InDesign, Version Control (Git and Github)
                </p>
                <Link to="https://www.linkedin.com/in/ireneasensio/">Check my Linkedin</Link>
                <Link to="https://github.com/ihatepineapple">Check my Github</Link>
            </div>
            <Link to="/">Go Back</Link>
        </div>
    )

}

export default About;