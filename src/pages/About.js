import React from 'react'
import Nav from "../components/Nav"; 
// import { Link } from "react-router-dom";
// import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function About() {
    return <>
    <Nav />
    <div>
        <h2>Media Store </h2>
        <div>
        <p>
            The following application was created by Isra Idris. This media app displays a variety 
            of music, books and videos that a user can save to a local basket.
        </p>
        <br />
        <p>
            Click on the "Add +" button to add to your basket. Use the search bar to find the latest 
            media item by name or description.
            <br/>
            <br/>
            Browse the iTunes store for media you are interested in. Add to your basket and keep track of costs.
        </p>
        </div>
    </div>
</>
}

export default About;