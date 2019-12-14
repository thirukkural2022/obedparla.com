const commonsStyles = {
  media: {
    desktop: 'min-width: 762px',
    mobile: 'max-width: 761px',
  },
  containerSize: '650px',
  containerSpace: 'var(--container-space)',
};
const theme = {
  light: {
    ...commonsStyles,
    backgroundColor: '#fafafa',
    textColor: 'hsla(0,0%,0%,0.8)',
  },
  dark: {
    ...commonsStyles,
    backgroundColor: '#1f1f1f',
    textColor: '#f1f1f1',
  },
};

export default theme;
