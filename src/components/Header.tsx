import DarkMode from '@mui/icons-material/DarkModeOutlined';
import LightMode from '@mui/icons-material/LightModeOutlined';
import { useUserSettings } from '../common/UserSettingsContext';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import ReactGA from 'react-ga4';

const Header = () => {
    const { state, dispatch } = useUserSettings();
    const nav = useNavigate();
    const isMobile = window.innerWidth < 768;

    return (
        <div className="header-container">
            <div className="header-container-left">
                <Link to="/" className="header-item">Home</Link>
                <a href='drew-resume.pdf' target='_blank' rel='noreferrer' className='header-item'>Resume</a>
                
            </div>
            <div className="header-container-right">
                <button className='contact-me-btn' onClick={() => {
                        nav('/contact')
                        ReactGA.event({
                            category: 'Contact',
                            action: 'Clicked Contact Me'
                        });
                    }} >
                        {isMobile ? 'Contact' : 'Contact Me'}
                    </button>
                {state.darkMode ? (
                    <DarkMode
                        className="header-item header-button"
                        onClick={() => dispatch({ type: 'TOGGLE_DARK_MODE' })}
                    />
                ) : (
                    <LightMode
                        className="header-item header-button"
                        onClick={() => dispatch({ type: 'TOGGLE_DARK_MODE' })}
                    />
                )}
            </div>
        </div>
    )
}

export default Header;