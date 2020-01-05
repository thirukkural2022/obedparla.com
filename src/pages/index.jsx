import React from 'react';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';

import Layout from '../layout/Layout';
import PostListing from '../components/PostListing/PostListing';
import SEO from '../components/SEO/SEO';
import { siteTitle } from '../../data/SiteConfig';
import { usePostFields } from '../hooks/usePostFields';
import { useRandomEmoji } from '../hooks/useRandomEmoji';
import { SimpleButton as ViewAll } from '../components/SimpleButton';
import { NewsletterIframe } from '../components/NewsletterIframe';
import { SpacingContainer } from '../components/styles';

const IndexViewAll = styled(ViewAll)`
  margin-left: 30px;
  bottom: 3px;
`;

const H2 = styled.h2`
  display: inline-block;
`;

const IndexPage = props => {
  const emoji = useRandomEmoji();
  const latestPostsEdges = props.data.latest.edges;
  const latestPosts = usePostFields(latestPostsEdges);

  const popularPostEdges = props.data.popular.edges;
  const popularPosts = usePostFields(popularPostEdges);

  return (
    <Layout>
      <div className='listing-container'>
        <div className='posts-container'>
          <Helmet title={siteTitle} />
          <SEO />
          <div>
            <h1>Hey, I'm Obed! {emoji}</h1>
            <SpacingContainer as={'p'} marginBottom={'4px'}>
              I'm a JavaScript Engineer, bookworm and writer. Welcome to my
              place in the internet, where you'll find my thoughts about books,
              life's questions and the journey of being a developer.
            </SpacingContainer>
          </div>
          <Link to='/about/'>
            <SpacingContainer as={'small'} margin={0}>
              Who are you, again?
            </SpacingContainer>
          </Link>

          <section>
            <SpacingContainer marginBottom='18px'>
              <H2>Latest articles</H2>
              <IndexViewAll to='/blog/'>View all</IndexViewAll>
            </SpacingContainer>
            <PostListing postList={latestPosts} />
          </section>
          <section>
            <SpacingContainer marginBottom='18px'>
              <H2>Popular articles</H2>
              <IndexViewAll to='/blog/'>View all</IndexViewAll>
            </SpacingContainer>
            <PostListing postList={popularPosts} />
          </section>
        </div>
        <hr />
        <NewsletterIframe margin={'0 0 1.4rem'} />
        <hr />
      </div>
    </Layout>
  );
};

export default IndexPage;

/* eslint no-undef: "off" */
export const listingQuery = graphql`
  query ListingQuery {
    latest: allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      limit: 6
    ) {
      edges {
        node {
          fields {
            slug
            date: fancyDate
          }
          timeToRead
          frontmatter {
            categories
            cover {
              childImageSharp {
                fixed(width: 70, height: 70) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            title
          }
        }
      }
    }
    popular: allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      limit: 6
      filter: { frontmatter: { categories: { eq: "popular" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date: fancyDate
          }
          timeToRead
          frontmatter {
            categories
            cover {
              childImageSharp {
                fixed(width: 70, height: 70) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            title
          }
        }
      }
    }
  }
`;
