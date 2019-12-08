import React from "react";
import Helmet from "react-helmet";
import { createGlobalStyle } from "styled-components";

import config from "../../data/SiteConfig";

const xPadding = 1.5;
const GlobalStyle = createGlobalStyle`
  body {
    max-width: 650px;
    padding: 0 ${xPadding}rem;
    margin-left: auto;
    margin-right: auto;
    font-family: 'Merriweather','Georgia',serif;    
  }
  
  p, h1,h2,h3,h4,h5,h6 {
    line-height: 1.6;
  }
  
  img{
    width: 100%;
  }
  p > img {
    width: calc(100% + ${xPadding * 2}rem);
    margin-left: -${xPadding}rem;
  }
  
`;

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

        {children}
      </>
    );
  }
}
