import React from 'react';
import { Link } from "react-router-dom";
import NavBar from "./Navbar";
import AwesomeImg from "../images/awesome-trivia.png";
import BirdEimg from "../images/bird-e.png";
import GoodsImg from "../images/thegoods.png";
import { ExternalLink } from 'react-external-link';

function Work() {
    return (
        <div> 
        <NavBar />
        <div className="wrapper">
            <h2>Selected Works</h2>
            <article className="article-wrap">
                <h3>Awesome Trivia</h3>
                <div className="work-content">
                    <img className="work-img" src={AwesomeImg} alt="awesome-trivia"/>
                    <p className="work-info">This is the first project I coded during my Ironhack Web Development Bootcamp. <br/>
                    This was coded together with Issa Gruber and Abbie Summers.<br/>
                    It's a trivia game using <b>Javascript</b> and <b>DOM manipulation.</b></p>
                </div>
                <div className="btn-wrapper">
                    <ExternalLink href="https://gruberi.github.io/AwesomeTrivia/" ><button className="btn-round">Play Awesome Trivia</button></ExternalLink>
                    <ExternalLink href="https://github.com/ihatepineapple/AwesomeTrivia"><button className="btn-round">See the repo on Github</button></ExternalLink>
                </div>
            </article>

            <article className="article-wrap">
                <h3>Bird-e</h3>
                <div className="work-content">
                    <img className="work-img" src={BirdEimg} alt="bird-e"/>   
                    <p className="work-info">Bird-e is a collaborative bird watching app that allows users to store all the birds they've seen.
                    It displays the info in a user-friendly way for a better overview. <br/>
                    Bird-e has the option of editing and deleting items as well.<br/>
                    This was coded together with Sabela Pena.
                    Coded using <b>NodeJS, Express</b> and <b>MongoDB.</b></p>
                </div>
                <div className="btn-wrapper">
                    <ExternalLink href="http://bird-e.herokuapp.com/"><button className="btn-round">See Bird-E Live</button></ExternalLink>
                    <ExternalLink href="https://github.com/ihatepineapple/bird-e" ><button className="btn-round">See the repo on Github</button></ExternalLink>
                </div>
            </article>

            <article className="article-wrap">
                <h3>The Goods</h3>
                <div className="work-content">
                    <img className="work-img" src={GoodsImg} alt="the-goods"/>
                    <p className="work-info">This my final project from Ironhack Web Development Bootcamp. <br/>
                    The goods is an online networking platform for freelancers of the creative world, where they can showcase their work. <br/>
                    Users are able to complete their profile and upload their best projects to get hired.
                    Business' can see the projects, see talent profiles and get in touch with them.<br/>
                    Coded using <b>ReactJS</b> and <b>MongoDB.</b></p>
                </div>
                <div className="btn-wrapper">
                    <ExternalLink href="https://the-goods20.herokuapp.com/"><button className="btn-round">See The Goods Live</button></ExternalLink>
                    <ExternalLink href="https://github.com/ihatepineapple/the-goods" ><button className="btn-round">See the repo on Github</button></ExternalLink>
                </div>
            </article>
            <div className="btn-wrapper-back">
                <Link to="/"><button className="menu-btn">Go Back</button></Link>   
            </div> 
        </div>

        
        </div>
    )
}

export default Work
