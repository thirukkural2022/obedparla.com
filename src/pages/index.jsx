import React from 'react';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import tinycolor from 'tinycolor2';

import Layout from '../layout/Layout';
import PostListing from '../components/PostListing/PostListing';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';
import { usePostFields } from '../hooks/usePostFields';
import { useRandomEmoji } from '../hooks/useRandomEmoji';

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
          <Helmet title={config.siteTitle} />
          <SEO />
          <h1>Hey, I'm Obed! {emoji}</h1>
          <p
            css={css`
              margin-bottom: 4px;
            `}
          >
            I'm JavaScript engineer & mentor, bookworm and an attempt at a
            writer. Welcome to my mostly-polished dumpster of ideas, where
            you'll find my thoughts about books, life's questions, and hopefully
            good stories.
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

          <section>
            <div css={{ marginBottom: '18px' }}>
              <h2 css={{ display: 'inline-block' }}>Latest articles</h2>
              <ViewAll to='/blog'>View all</ViewAll>
            </div>
            <PostListing postList={latestPosts} />
          </section>

          <section>
            <div css={{ marginBottom: '18px' }}>
              <h2 css={{ display: 'inline-block' }}>Popular articles</h2>
              <ViewAll to='/blog'>View all</ViewAll>
            </div>
            <PostListing postList={popularPosts} />
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

const ViewAll = styled(Link)`
  display: inline-block;
  background: ${({ theme }) => theme.lightBackground};
  padding: 4px 8px;
  border-radius: 4px;
  border: none;
  box-shadow: none;
  cursor: pointer;
  font-size: 0.8rem;
  position: relative;
  bottom: 3px;
  margin-left: 30px;
  color: ${({ theme }) => theme.textColor};
  opacity: 0.8;

  &:hover {
    background: ${({ theme }) =>
      tinycolor(theme.lightBackground)
        .darken(10)
        .toString()};
  }

  &:active {
    background: ${({ theme }) =>
      tinycolor(theme.lightBackground)
        .darken(40)
        .toString()};
    color: ${({ theme }) => theme.colorNegative};
  }
`;

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
                fixed(width: 80, height: 80) {
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
                fixed(width: 80, height: 80) {
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
