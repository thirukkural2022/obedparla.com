import React from "react";
import Helmet from "react-helmet";
import { ThemeProvider } from "emotion-theming";

import config from "../../data/SiteConfig";
import { Header } from "../components/Header/header";
import { Container } from "./components/container";
import { ThemeContext, ThemeContextProvider } from "../theming/ThemeContext";
import { css } from "@emotion/core";
import GlobalStyles from "./globalStyles";

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
        <Container>{children}</Container>
      </ThemeContextProvider>
    );
  }
}
