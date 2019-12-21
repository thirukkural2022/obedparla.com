import React, { useState } from 'react';
import { ThemeProvider } from 'emotion-theming';

import theme from './theme';

export const ThemeContext = React.createContext({});
export const ThemeContextProvider = ({ children }) => {
  const darkModePreference =
    typeof window !== 'undefined' ? localStorage.getItem('oDarkMode') : false;
  const [darkMode, setDarkMode] = useState(darkModePreference === 'true');

  const contextValue = {
    theme,
    darkMode,
    toggleDarkMode() {
      localStorage.setItem('oDarkMode', `${!darkMode}`);
      setDarkMode(!darkMode);
    },
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeProvider
        theme={darkMode ? contextValue.theme.dark : contextValue.theme.light}
      >
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
