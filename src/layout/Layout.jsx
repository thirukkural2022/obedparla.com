import React from 'react';
import Helmet from 'react-helmet';

import config from '../../data/SiteConfig';
import { Header } from '../components/Header/header';
import { Container } from './components/container';
import GlobalStyles from './globalStyles';
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
        </Helmet>
        <Header />
        <Container>{children}</Container>
        <Footer />
      </>
    );
  }
}
