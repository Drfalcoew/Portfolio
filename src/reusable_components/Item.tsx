import { useState, useEffect } from 'react';
import { Box } from '@mui/material';

interface ItemProps {
    label?: string;
    src?: string;
    alt?: string;
    onClick: () => void;
    index: number;
}

const Item = ({ label, src, alt, onClick, index }: ItemProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        // Set a timeout to trigger the fade-in animation for each item independently
        const timeoutId = setTimeout(() => {
            setIsVisible(true);
        }, index * 400); // Adjust the delay as needed

        // Clear the timeout when the component unmounts to avoid memory leaks
        return () => clearTimeout(timeoutId);
    }, [index]);

    return (
        <Box className="item-container" onClick={onClick} 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)} 
        style={{
            opacity: isVisible ? 1 : 0,
            boxShadow: isHovered ? '0 0 25px 4px var(--accent-color)' : '0 4px 8px rgba(0,0,0,0.3)',
        }}>
            <img src={src} alt={alt} className="item-image"/>
            <div className="item-label">{label}</div>
        </Box>
    );
};

export default Item;
