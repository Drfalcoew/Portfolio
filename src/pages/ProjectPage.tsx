import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import './Pages.css';

const ProjectPage = () => {
    const [shownImageIndex, setShownImageIndex] = useState(0);
    const location = useLocation();
    const { title, images, description } = location.state;
    let image;
    
    console.log(images); // prints undefined for some reason?
    
    // rotate through images on a timer
    if (images.length > 0) {
        image = images[shownImageIndex];
    } 

    if (images.length > 1) {
        setTimeout(() => {
            setShownImageIndex((shownImageIndex + 1) % images.length);
        }, 6500);
    }

    return (
        <div className='root-project-container'>
            <div className='project-images-container'>
                <Paper elevation={13} className='project-image-paper' style={{display: images.length === 0 ? 'None' : 'block'}}>
                    <img src={image} alt='project' className='project-image' draggable='false'/>
                </Paper>
            </div>
            <div className='project-info-container'>
                <div className='project-info-content'>
                    <h1>{title}</h1>
                    <p className='project-description'>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectPage;