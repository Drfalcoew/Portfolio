import React from "react";
import Projects from "../components/Projects";
import '../App.css';


const Home = () => {

    return (
        <div className="home-container">
        <div className="home-title-container">
            <div className="animation-container">
                <img src="/tree_vid.gif" alt="Animated tree" className="header-logo"/>
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