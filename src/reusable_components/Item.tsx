// src/reusable_components/Item.tsx
import { useState, useEffect } from 'react';
import { Box } from '@mui/material';

interface ItemProps {
  label?: string;
  src?: string;
  alt?: string;
  onClick: () => void;
  index: number;
  disabled?: boolean;
}

const Item = ({ label, src, alt, onClick, index, disabled }: ItemProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsVisible(true), index * 400);
    return () => clearTimeout(timeoutId);
  }, [index]);

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    // Only proceed on *trusted* user actions
    if (!e.isTrusted || disabled) return;
    e.preventDefault();
    e.stopPropagation();
    onClick();
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (disabled) return;
    if ((e.key === 'Enter' || e.key === ' ') && e.isTrusted) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <Box
      className="item-container"
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled ? 'true' : 'false'}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? 'auto' : 'none', // guard during fade-in
        boxShadow: isHovered ? '0 0 25px 4px var(--accent-color)' : '0 4px 8px rgba(0,0,0,0.3)',
        borderRadius: 2,
        overflow: 'hidden',
        outline: 'none',
      }}
    >
      <img src={src} alt={alt} className="item-image" />
      <div className="item-label">{label}</div>
    </Box>
  );
};

export default Item;
