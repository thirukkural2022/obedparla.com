import React from 'react';
import { ThemeContextProvider } from './src/theming/ThemeContext';

require('prismjs/themes/prism-tomorrow.css');

export const wrapRootElement = ({ element }) => (
  <ThemeContextProvider>{element}</ThemeContextProvider>
);
