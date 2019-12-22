import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import Layout from '../layout/Layout';
import PostListing from '../components/PostListing/PostListing';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';
import { usePostFields } from '../hooks/usePostFields';
import { CategoriesList } from '../components/CategoryButton';

const BlogPage = props => {
  const postEdges = props.data.posts.edges;
  const allPosts = usePostFields(postEdges);

  return (
    <Layout>
      <h1>All articles</h1>

      <CategoriesList categories={props.data.categories.distinct} />

      <div className='listing-container'>
        <div className='posts-container'>
          <Helmet title={`Articles - ${config.siteTitle}`} />
          <SEO />
          <PostListing postList={allPosts} isBig />
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;

/* eslint no-undef: "off" */
export const listingQuery = graphql`
  query Blogquery {
    posts: allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      limit: 10
    ) {
      edges {
        node {
          fields {
            date
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            cover {
              childImageSharp {
                fluid(maxWidth: 650, maxHeight: 250, quality: 60) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    categories: allMarkdownRemark {
      distinct(field: frontmatter___categories)
    }
  }
`;
