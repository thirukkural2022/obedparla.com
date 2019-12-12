import React, { useState } from "react";
import { ThemeProvider } from "emotion-theming";

import theme from "./theme";

export const ThemeContext = React.createContext({});
export const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const contextValue = {
    theme,
    darkMode,
    toggleDarkMode() {
      setDarkMode(!darkMode);
    }
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
