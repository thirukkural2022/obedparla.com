import Typography from 'typography';
import parnassusTheme from 'typography-theme-parnassus';

parnassusTheme.baseFontSize = '16px;';
parnassusTheme.googleFonts = [
  {
    name: 'Merriweather Sans',
    styles: ['800'],
  },
  {
    name: 'Merriweather',
    styles: ['400,400i,700&display=swap'],
  },
];

const typography = new Typography(parnassusTheme);

// Export helper functions
export const { scale, rhythm, options } = typography;
export default typography;
