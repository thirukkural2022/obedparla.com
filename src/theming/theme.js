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
    highContrastBg: '#FFF',
    lightBackground: '#e5e5e5',
    textColor: 'hsla(0,0%,0%,0.8)',
    colorNegative: '#f1f1f1',
    stickyHeaderBg: '#fff',
  },
  dark: {
    isDark: true,
    ...commonsStyles,
    backgroundColor: '#1f1f1f',
    highContrastBg: '#000',
    lightBackground: '#181818',
    textColor: '#f1f1f1',
    colorNegative: '#f1f1f1',
    stickyHeaderBg: '#101010',
  },
};

export default theme;
