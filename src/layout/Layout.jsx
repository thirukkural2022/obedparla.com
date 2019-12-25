import React from 'react';
import Helmet from 'react-helmet';

import config from '../../data/SiteConfig';
import { Header } from '../components/Header/header';
import { Container } from './components/container';
import GlobalStyles from './components/globalStyles';
import Footer from '../components/Footer/Footer';

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <GlobalStyles />
        <Helmet>
          <meta name='description' content={config.siteDescription} />
          <html lang='en' />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/logos/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/logos/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/logos/favicon-16x16.png'
          />
        </Helmet>
        <Header />
        <Container>{children}</Container>
        <Footer />
      </>
    );
  }
}
