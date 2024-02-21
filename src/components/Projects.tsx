import { Grid } from '@mui/material';
import Item from '../reusable_components/Item';
import { useNavigate } from 'react-router-dom';
import ReactGA from 'react-ga';


interface ProjectState {
    title: string;
    image: string;
    description: string;
}

const Projects = () => {

    const nav = useNavigate();

    const handleProjectClick = (data : ProjectState) => {
        nav(`/projects/${data.title}`, { state: data });
    }
        
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
                handleProjectClick({title: 'Marketplace', image: '/projects/marketplace_ios.png', description: 'This is the description for Marketplace'});
            }
        },
        {
            label: 'Sowing',
            src: "/projects/sowing_2.webp",
            alt: "Sowing App",
            onClick: () => {
                handleProjectClick({title: 'Sowing', image: '/projects/sowing_2.webp', description: 'This is the description for Sowing'});
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
                                onClick={() => {
                                    project.onClick();
                                    ReactGA.event({
                                        category: 'Project',
                                        action: 'Clicked on project',
                                        label: project.label
                                    });
                                }}
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