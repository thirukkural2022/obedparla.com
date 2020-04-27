const commonsStyles = {
  media: {
    desktop: 'min-width: 762px',
    mobile: 'max-width: 761px',
    smallMobile: 'max-width: 580px',
  },
  containerSize: '700px',
  containerSpace: 'var(--container-space)',
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
    navigationBg: '#fff',
    softHighlight: '#fafafa',
    highlightColor: '#1071dc',
  },
  dark: {
    isDark: true,
    ...commonsStyles,
    backgroundColor: '#1f1f1f',
    highContrastBg: '#000',
    lightBackground: '#000',
    textColor: '#f1f1f1',
    colorNegative: '#f1f1f1',
    navigationBg: '#101010',
    softHighlight: 'rgba(14, 14, 14, 0.63)',
    highlightColor: '#4096f5',
  },
};

export default theme;
