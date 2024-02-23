import { Grid } from '@mui/material';
import Item from '../reusable_components/Item';
import { useNavigate } from 'react-router-dom';
import ReactGA from 'react-ga4';


interface ProjectState {
    title: string;
    images: string[];
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
            src: "/projects/donbot_darkmode.jpg",
            alt: "DonBot DonumRobotum Deal Finder",
            onClick: () => {
                 window.open('https://donumrobotum.com/', '_blank', 'noopener noreferrer')}
            },
        {
            label: 'Foster`s Estate',
            src: "/projects/fostersEstate/fosters_estate_cover.jpg",
            alt: "Fosters Estate Sale Service",
            onClick: () => {
                window.open('https://fostersestate.com/', '_blank', 'noopener noreferrer')}
        },
        {
            label: 'Marketplace',
            src: "/projects/market/icontemplate.webp",
            alt: "Marketplace iOS App",
            onClick: () => {
                handleProjectClick({title: 'Marketplace', images: ['/projects/market/market_1.webp', '/projects/market/market_2.webp'], description: 'Marketplace is a two-sided marketplace project that includes a customer-facing app and a merchant-facing app. It is built with Swift, Firebase, UIKit, and Stripe' });
            }
        },
        {
            label: 'Sowing',
            src: "/projects/sowing/sowingicon.webp",
            alt: "Sowing App",
            onClick: () => {
                handleProjectClick({title: 'Sowing', images: ['/projects/sowing/sowing_vision.gif'], description: 'Sowing is a goal setting app that helps you track your progress and stay motivated. It is built with Swift, Core Data, Core Animation, and UIKit'});
            }
        },
        {
            label: 'Mobile Games',
            src: "/projects/games/duckshoticon.webp",
            alt: "Mobile Games",
            onClick: () => {
                handleProjectClick({title: 'Mobile Games', images: ['/projects/games/duckshot_anim.gif', '/projects/games/hungry_driver.gif'],
                    description: 'I have developed a few mobile games using SpriteKit and Swift including Hungry Driver and DuckShot. They are both built with Swift, SpriteKit/Scenekit, and UIKit'});
            }
        },
        {
            label: 'RiRi\'s Jewelry',
            src: "/icons/under_construction.webp",
            alt: "Storefront Website for RiRi's Jewelry",
            disabled: true,
            onClick: () => {
                handleProjectClick({title: 'RiRi\'s Jewelry', images: [], description: 'RiRi\'s Jewelry is a storefront website for a jewelry store. It is built with HTML, CSS, and JavaScript'});
            }
        }

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
                                    if (project.disabled) {
                                        project.label = "Under Construction";
                                        return;
                                    }
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