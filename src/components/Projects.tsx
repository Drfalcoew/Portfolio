import { Grid } from '@mui/material';
import Item from '../reusable_components/Item';
import { useNavigate } from 'react-router-dom';


interface ProjectState {
    title: string;
    image: string;
    description: string;
}

const Projects = () => {

    const nav = useNavigate();

    const myProjectSites = [
        {
            label: 'Donum Robotum',
            src: "/projects/donbot_darkmode.png",
            alt: "DonBot DonumRobotum Deal Finder",
            onClick: () => {
                 window.open('https://donumrobotum.com/', '_blank', 'noopener noreferrer')}
            },
        {
            label: 'Foster`s Estate',
            src: "/projects/fosters_estate_cover.jpg",
            alt: "Fosters Estate Sale Service",
            onClick: () => {
                window.open('https://fostersestate.com/', '_blank', 'noopener noreferrer')}
        },
        {
            label: 'Marketplace',
            src: "/projects/marketplace_ios.png",
            alt: "Marketplace iOS App",
            onClick: () => {
                nav('/projects/marketplace', { 
                    state: {
                        title: 'Marketplace',
                        image: '/projects/marketplace_ios.png',
                        description: 'This is the description for Marketplace'
                    } as ProjectState // Cast the object to ProjectState type
                });
            }
        },
        {
            label: 'Sowing',
            src: "/projects/sowing_2.webp",
            alt: "Sowing App",
            onClick: () => {
                nav('/projects/sowing', { 
                    state: {
                        title: 'Sowing',
                        image: '/projects/sowing_2.webp',
                        description: 'This is the description for Sowing'
                    } as ProjectState // Cast the object to ProjectState type
                });
            }
        },
    ];


    return (
        <div className="projects-container">
            <div className="projects-grid-container">
                <Grid container spacing={10}>
                    {myProjectSites.map((project, index) => (
                        <Grid item xs={12} md={3} lg={3} key={index}>
                            <Item
                                label={project.label}
                                src={project.src}
                                alt={project.alt}
                                onClick={project.onClick}
                                index={index}
                            />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
}

export default Projects;