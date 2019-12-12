import React from "react";
import Helmet from "react-helmet";
import { ThemeProvider } from "emotion-theming";

import config from "../../data/SiteConfig";
import { Header } from "../components/Header/header";
import { Container } from "./components/container";
import { ThemeContext, ThemeContextProvider } from "../theming/ThemeContext";
import { css } from "@emotion/core";
import GlobalStyles from "./globalStyles";

const ToggleTheme = () => {
  const themeContext = React.useContext(ThemeContext);

  return (
    <button
      type="button"
      css={css`
        padding: 10px 20px;
        position: fixed;
        top: 20px;
        right: 20px;
      `}
      onClick={themeContext.toggleDarkMode}
    >
      Dark Mode
    </button>
  );
};

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <ThemeContextProvider>
        <GlobalStyles />
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <html lang="en" />
        </Helmet>

        <Header />
        <ToggleTheme />
        <Container>{children}</Container>
      </ThemeContextProvider>
    );
  }
}
