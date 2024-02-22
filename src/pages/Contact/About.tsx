import React from 'react';
import './Contact.css';

const About = () => {
    return (
        <div className="about-container">
            <img src="/headshot.jpg" alt="Drew Foster" className="profile-pic"/>
            <h1>Hi, I'm Drew Foster</h1>
            <div style={{ fontSize: "1.2rem", fontWeight: "bold", marginTop: '10px' }}>Full Stack Developer</div>
            <div style={{ marginTop: '10px', marginBottom: '20px' }}>California, USA</div>
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
            As a full stack developer, I thrive on crafting elegant and intuitive web applications alongside robust scripts. My expertise spans a diverse range of technologies, notably React for front-end development and Java Spring Boot/Quarkus for backend services, leveraging RESTful architecture and SQL databases for seamless data management. Additionally, I possess proficiency in cloud platforms such as AWS, containerization with Docker, and automation using Python, YAML, among other tools. Continuously seeking avenues to expand my skills and deepen my knowledge, I am enthusiastic about embracing new challenges and opportunities for professional development.
            </p>
        </div>
    );
}

export default About;