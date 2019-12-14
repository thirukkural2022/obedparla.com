const commonsStyles = {
  media: {
    desktop: "min-width: 762px",
    mobile: "max-width: 761px"
  }
};
const theme = {
  dark: {
    ...commonsStyles,
    backgroundColor: "#1f1f1f"
  },
  light: {
    ...commonsStyles,
    backgroundColor: "#fafafa"
  }
};

export default theme;
