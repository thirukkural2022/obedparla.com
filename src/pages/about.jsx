import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../layout/Layout';

import { siteTitle } from '../../data/SiteConfig';
import { NewsletterIframe } from '../components/NewsletterIframe';

const AboutPage = () => {
  const age = new Date().getFullYear() - 2015;

  return (
    <Layout>
      <Helmet title={`About me | ${siteTitle}`} />

      <h1>About me</h1>
      <p>
        I'm Obed Parlapiano, I'm a JavaScript Engineer living in the beautiful
        city of Budapest and working for a remote-first company called{' '}
        <a href='heetch.com'>Heetch</a>. I'm an advocate for remote work, which
        I believe makes life better.
      </p>

      <h2>Books</h2>
      <p>
        Books are a big part of my life and one of my biggest passions. I'm{' '}
        <i>always</i> up for a discussion about books. I try to read from 30 to
        60 books every year and you can see this year books{' '}
        <a href='https://www.goodreads.com/user_challenges/16055659'>here</a>.
        This is the reason many of my articles are related to books I've read in
        one way or another. After all, the best source of knowledge are books.
      </p>

      <h2>Mentoring</h2>
      <p>
        I'm a professional mentor at{' '}
        <a href='https://www.thinkful.com/'>Thinkful</a> and{' '}
        <a href='https://www.bloc.io/'>Bloc.io</a> where I help others to learn
        the craft of software development.
      </p>

      <h2>This place</h2>
      <p>
        This is my personal space in the internet. You'll find my articles, open
        source projects and everything else I publish online that is worthwhile
        right here.
      </p>

      <p>
        There are three things that define me: my work as an engineer, the books
        I read and my lovely {age} years old daughter.
      </p>

      <h2>Freelancing</h2>
      <p>
        I'm a part-time freelancer working on a wide variety of projects,
        helping people become better engineers. If you'd like to woth with me{' '}
        <a href='mailto:obedparla@gmail.com'>get in touch</a>.
      </p>

      <h2>Contacting me</h2>
      <p>
        You can reach out to me on{' '}
        <a href='https://twitter.com/obedparla'>Twitter</a>.
      </p>

      <h2>Newsletter</h2>
      <p>
        Follow all my new articles and updates via my newsletter. You'll receive
        emails <i>only</i> for my new articles. Unsubscribe anytime.
      </p>
      <NewsletterIframe />
    </Layout>
  );
};

export default AboutPage;
