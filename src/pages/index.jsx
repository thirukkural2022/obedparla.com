import React from 'react';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../layout/Layout';

import PostListing from '../components/PostListing/PostListing';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';
import { usePostFields } from '../hooks/usePostFields';
import { css } from '@emotion/core';
import { useRandomEmoji } from '../hooks/useRandomEmoji';

const IndexPage = props => {
  const emoji = useRandomEmoji();
  const postEdges = props.data.allMarkdownRemark.edges;
  const postFields = usePostFields(postEdges);

  return (
    <Layout>
      <div className='listing-container'>
        <div className='posts-container'>
          <Helmet title={config.siteTitle} />
          <SEO />
          <h1>Hey, I'm Obed! {emoji}</h1>
          <p
            css={css`
              margin-bottom: 4px;
            `}
          >
            I'm JavaScript engineer, a bookworm and an attempt at a writer.
            Welcome to my mostly-polished dumpster of ideas, where you'll find
            my thoughts about books, life's questions, and hopefully good
            stories.
          </p>
          <Link to='/about'>
            <small
              css={css`
                margin: 0;
              `}
            >
              Who are you, again?
            </small>
          </Link>
          <h2>Latest articles</h2>
          <PostListing postList={postFields} />
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

/* eslint no-undef: "off" */
export const listingQuery = graphql`
  query ListingQuery {
    allMarkdownRemark(
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
                fixed(width: 100, height: 100) {
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
