import React, { useContext } from 'react';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import { css } from '@emotion/core';

import Layout from '../layout/Layout';
import PostListing from '../components/PostListing/PostListing';
import SEO from '../components/SEO/SEO';
import { siteTitle } from '../../data/SiteConfig';
import { usePostFields } from '../hooks/usePostFields';
import { useRandomEmoji } from '../hooks/useRandomEmoji';
import { SimpleButton as ViewAll } from '../components/SimpleButton';
import { useTheme } from 'emotion-theming';
import { NewsletterIframe } from '../components/NewsletterIframe';

const IndexPage = props => {
  const theme = useTheme();
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
          <div
            css={css`
              display: flex;
              align-items: center;

              iframe {
                margin: 0;
              }
              @media (${theme.media.mobile}) {
                flex-wrap: wrap;
              }
            `}
          >
            <div>
              <h1>Hey, I'm Obed! {emoji}</h1>
              <p
                css={css`
                  margin-bottom: 4px;
                `}
              >
                I'm a JavaScript engineer, bookworm and writer. Welcome to my
                place in the internet, where you'll find my thoughts about
                books, life's questions and the journey of being a developer.
              </p>
            </div>
          </div>
          <Link to='/about'>
            <small
              css={css`
                margin: 0;
              `}
            >
              Who are you, again?
            </small>
          </Link>
          <section>
            <div css={{ marginBottom: '18px' }}>
              <h2 css={{ display: 'inline-block' }}>Latest articles</h2>
              <ViewAll to='/blog' css={{ marginLeft: '30px', bottom: '3px' }}>
                View all
              </ViewAll>
            </div>
            <PostListing postList={latestPosts} />
          </section>
          <section>
            <div css={{ marginBottom: '18px' }}>
              <h2 css={{ display: 'inline-block' }}>Popular articles</h2>
              <ViewAll to='/blog' css={{ marginLeft: '30px', bottom: '3px' }}>
                View all
              </ViewAll>
            </div>
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
            date
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
            date
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
