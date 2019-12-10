import React from "react";
import Helmet from "react-helmet";

import config from "../../data/SiteConfig";
import { Header } from "../components/Header/header";
import GlobalStyle from "./globalStyles";
import { Container } from "./components/container";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <GlobalStyle theme="light" />
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <html lang="en" />
        </Helmet>
        <Header />
        <Container>{children}</Container>
      </>
    );
  }
}
