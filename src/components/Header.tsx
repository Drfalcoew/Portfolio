import DarkMode from '@mui/icons-material/DarkModeOutlined';
import LightMode from '@mui/icons-material/LightModeOutlined';
import { useUserSettings } from '../common/UserSettingsContext';
import { Link } from 'react-router-dom';
import ColorLens from '@mui/icons-material/ColorLensOutlined';
import Menu from '../reusable_components/Menu';
import { useState } from 'react';
import '../App.css';

const Header = () => {
    const { state, dispatch } = useUserSettings();
    
    const [accentMenuAnchorEl, setAccentMenuAnchorEl] = useState<null | HTMLElement>(null);

    const handleAccentMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAccentMenuAnchorEl(event.currentTarget);
    };

    const handleCloseAccentMenu = () => {
        setAccentMenuAnchorEl(null);
    };

    const accentColorMenuItems = [
        // Add 9 accent colours. Main colours but less saturated.
        { color: '#D32F2F', onClick: () => dispatch({ type: 'SET_ACCENT_COLOR', payload: '#D32F2F' })},
        { color: '#00c400', onClick: () => dispatch({ type: 'SET_ACCENT_COLOR', payload: '#00c400' })},
        { color: '#64cbcc', onClick: () => dispatch({ type: 'SET_ACCENT_COLOR', payload: '#64cbcc' })},
        { color: '#FFA000', onClick: () => dispatch({ type: 'SET_ACCENT_COLOR', payload: '#FFA000' })},
        { color: '#B026FF', onClick: () => dispatch({ type: 'SET_ACCENT_COLOR', payload: '#B026FF' })},
        { color: '#455A64', onClick: () => dispatch({ type: 'SET_ACCENT_COLOR', payload: '#455A64' })},
    ];

    return (
        <div className="header-container">
            <div className="header-container-left">
                <Link to="/" className="header-item">Home</Link>
                <Link to="/contact" className="header-item">Contact</Link>
            </div>
            <div className="header-container-right">
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

                <button onClick={handleAccentMenuClick} style={{ width: 'fit-content', border: 'none', backgroundColor: 'transparent' }}>
                    <ColorLens className="header-item header-button"/>
                </button>
                <Menu 
                    anchorEl={accentMenuAnchorEl} 
                    handleClose={handleCloseAccentMenu} 
                    menuItems={accentColorMenuItems} 
                    state={state} 
                />
            </div>
        </div>
    )
}

export default Header;