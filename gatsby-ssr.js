import React from 'react';
import { ThemeContextProvider } from './src/theming/ThemeContext';

export const wrapRootElement = ({ element }) => (
  <ThemeContextProvider>{element}</ThemeContextProvider>
);
