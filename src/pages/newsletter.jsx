import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../layout/Layout';

import { siteTitle } from '../../data/SiteConfig';

const AboutPage = () => (
  <Layout>
    <Helmet title={`Newsletter| ${siteTitle}`} />

    <h1>Newsletter</h1>
    <p>
      I write about books, code and candid thoughts. I hate spam as much as you
      do and I only email when I have a publish a new article. You can
      unsubscribe at <i>any time</i>
    </p>

    <iframe
      width='100%'
      height='480'
      src='https://obedparla.substack.com/embed'
      frameBorder='0'
      scrolling='no'
      css={{ margin: 0 }}
    />
  </Layout>
);

export default AboutPage;
