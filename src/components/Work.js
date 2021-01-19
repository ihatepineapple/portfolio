import React from 'react';
import { Link } from "react-router-dom";
import NavBar from "./Navbar";

function Work() {
    return (
        <div> 
        <NavBar />
        <div className="wrapper">
            <h2>Selected Works</h2>
            <article className="article-wrap">
                <h3>Awesome Trivia</h3>
                <p>This is the first project I coded during my Ironhack Web Development Bootcamp.
                This was coded together with Issa Gruber and Abbie Summers.
                It's a trivia game using Javascript and Dom manipulation.</p>
                <Link to="#" className="btn-round">Play Awesome Trivia</Link>
                <Link to="#" className="btn-round">See the repo on Github</Link>
            </article>

            <article className="article-wrap">
                <h3>Bird-e</h3>
                <p>Bird-e is a collaborative bird watching app that allows users to store all the birds they've seen.
                It displays the info in a user-friendly way for a better overview. Bird-e has the option of editing and deleting items as well.
                This was coded together with Sabela Pena.
                Coded using NodeJS, Express and MongoDB.</p>
                <Link to="#" className="btn-round">Bird-e Live</Link>
                <Link to="#" className="btn-round">See the repo on Github</Link>
            </article>

            <article className="article-wrap">
                <h3>The Goods</h3>
                <p>This my final project from Ironhack Web Development Bootcamp.
                The goods is an online networking platform for freelancers of the creative world, where they can showcase their work. 
                Also business' can search for talent and hire them. Once registered, users can complete their profile and upload their best projects to get hired.
                Business' can see the projects, see talent profiles and get in touch with them.
                Coded using ReactJS and MongoDB.</p>
                <Link to="#" className="btn-round">The Goods Live</Link>
                <Link to="#" className="btn-round">See the repo on Github</Link>
            </article>
        </div>

        <Link to="/">Go Back</Link>    
        </div>
    )
}

export default Work
