import React from "react";
import Projects from "../components/Projects";
import '../App.css';


const Home = () => {
    return (
        <div className="home-container">
        <div className="home-title-container">
            <div className="animation-container">
                <video autoPlay muted loop className="header-logo">
                    <source src="/tree_vid.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="home-title-text-container">
                <h1 className="home-title">Drew Foster</h1>
            </div>
        </div>
        <Projects />
    </div>
    );
}

export default Home;