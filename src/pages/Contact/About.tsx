import React from 'react';
import './Contact.css';

const About = () => {
    return (
        <div className="about-container">
            <img src="/headshot.jpg" alt="Drew Foster" className="profile-pic"/>
            <h1>Hi, I'm Drew Foster</h1>
            <h4>Full Stack Developer</h4>
            <div className="about-socials">
                <div className="social-icon-container" style={{backgroundColor: "#007BB5"}}>
                    <a href="
                    https://www.linkedin.com/in/drfalcoew/" target="_blank" rel="noreferrer">
                        <img src="/icons/linkedin.svg" alt="LinkedIn" className="social-icon"/>
                    </a>
                </div>
                <div className="social-icon-container" style={{backgroundColor: "white"}}>
                    <a href="
                    https://www.github.com/drfalcoew" target="_blank" rel="noreferrer">
                        <img src="/icons/github.svg" alt="GitHub" className="social-icon"/>
                    </a>
                </div>
            </div>
            <p className="about-description">
                I am a full stack developer with a passion for creating beautiful, user-friendly web applications. I have experience with a variety of technologies including React, Node.js, and MongoDB. I am always looking for new opportunities to learn and grow as a developer.
            </p>
        </div>
    );
}

export default About;