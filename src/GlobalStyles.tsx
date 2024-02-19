import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { useUserSettings } from './common/UserSettingsContext'

// Define a TypeScript interface for the props
interface GlobalStyleProps {
  darkMode: boolean;
  accentColor: string;
}

// TODO: Remove this file and just use DynamicStyles.tsx
// Use the interface in your GlobalStyles component
const GlobalStyles = createGlobalStyle<GlobalStyleProps>`
  .App {
    background-color: ${(props) => (props.darkMode ? '#282c34' : '#e0e0e0')};
    color: ${(props) => (props.darkMode ? 'white' : 'black')};
    /* other styles */
  }
  :root {
    --item-color: ${(props) => (props.darkMode ? '#e0e0e0' : '#282c34')};
    --accent-color: ${(props) => (props.accentColor)};
  }
  /* other styles */
  .item-container {
    background-color: ${(props) => (props.darkMode ? '#181a1f' : '#ededed')};
  }
`;

const StyledGlobalStyles = () => {
  const { state } = useUserSettings();

  return <GlobalStyles darkMode={state.darkMode} accentColor={state.accentColor} />;
};

export default StyledGlobalStyles;
