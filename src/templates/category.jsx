import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../layout/Layout';

import PostListing from '../components/PostListing/PostListing';
import { siteTitle } from '../../data/SiteConfig';
import { usePostFields } from '../hooks/usePostFields';
import { CategoriesList } from '../components/CategoryButton';

const CategoryTemplate = props => {
  const { category } = props.pageContext;
  const postFields = usePostFields(props.data.posts.edges);

  return (
    <Layout>
      <h1>All articles in "{category}"</h1>
      <Helmet title={`Articles in category "${category}" | ${siteTitle}`} />
      <CategoriesList categories={props.data.categories.distinct} />
      <PostListing postList={postFields} isBig />
    </Layout>
  );
};

export default CategoryTemplate;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CategoryPage($category: String) {
    posts: allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { categories: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            date: fancyDate
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover {
              childImageSharp {
                fluid(maxWidth: 650, maxHeight: 250, quality: 60) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            date
          }
        }
      }
    }
    categories: allMarkdownRemark {
      distinct(field: frontmatter___categories)
    }
  }
`;
