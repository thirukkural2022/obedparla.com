const commonsStyles = {
  media: {
    desktop: 'min-width: 762px',
    mobile: 'max-width: 761px',
  },
  containerSize: '650px',
  containerSpace: 'var(--container-space)',
  highlightColor: '#f55a32',
  softHighlight: 'rgba(245, 121, 81, 0.2)',
};
const theme = {
  light: {
    isDark: false,
    ...commonsStyles,
    backgroundColor: '#fafafa',
    textColor: 'hsla(0,0%,0%,0.8)',
  },
  dark: {
    isDark: true,
    ...commonsStyles,
    backgroundColor: '#1f1f1f',
    textColor: '#f1f1f1',
  },
};

export default theme;
