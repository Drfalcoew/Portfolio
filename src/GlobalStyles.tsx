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
    --text-color-2: ${(props) => (props.darkMode ? '#98999c' : '#565b66')};
  }
  /* other styles */
  .item-container {
    background-color: ${(props) => (props.darkMode ? '#181a1f' : '#ededed')};
  }
  .footer-container {
    background-color: ${(props) => (props.darkMode ? '#1E2128' : '#C5C5C5')};
  }
`;

const StyledGlobalStyles = () => {
  const { state } = useUserSettings();

  return <GlobalStyles darkMode={state.darkMode} accentColor={state.accentColor} />;
};

export default StyledGlobalStyles;
