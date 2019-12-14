import React from 'react';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../layout/Layout';

import PostListing from '../components/PostListing/PostListing';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';
import { usePostFields } from '../hooks/usePostFields';

const IndexPage = props => {
  const postEdges = props.data.allMarkdownRemark.edges;
  const postFields = usePostFields(postEdges);

  return (
    <Layout>
      <div className='listing-container'>
        <div className='posts-container'>
          <Helmet title={config.siteTitle} />
          <SEO />
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
            cover {
              childImageSharp {
                fixed(width: 100, height: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            title
            date
          }
        }
      }
    }
  }
`;
