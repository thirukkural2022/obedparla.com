import React from 'react';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import { Link, graphql } from 'gatsby';

import Layout from '../layout/Layout';

import { siteTitle } from '../../data/SiteConfig';
import { SpacingContainer } from '../components/styles';
import PostListing from '../components/PostListing/PostListing';
import { usePostFields } from '../hooks/usePostFields';

const H1 = styled.h1`
  margin-bottom: 2rem;
`;
const AboutPage = props => {
  const latestPostsEdges = props.data.latest.edges;
  const latestPosts = usePostFields(latestPostsEdges);

  return (
    <Layout>
      <Helmet title={`404 | ${siteTitle}`} />
      <H1>Sorry, this page doesn't exist</H1>

      <img src='/images/404.svg' alt='404 illustrated' />

      <section>
        <SpacingContainer marginBottom='18px'>
          <h2>But these articles do</h2>
        </SpacingContainer>
        <PostListing postList={latestPosts} />
      </section>
    </Layout>
  );
};

/* eslint no-undef: "off" */
export const listingQuery = graphql`
  query Page404 {
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
  }
`;

export default AboutPage;
