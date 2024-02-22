import React from 'react';
import { useLocation } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import './Pages.css';

const ProjectPage = () => {

    const location = useLocation();
    const { title, image, description } = location.state;

    return (
        <div className='root-project-container'>
            <div className='project-images-container'>
                <Paper elevation={15} className='project-image-paper'>
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