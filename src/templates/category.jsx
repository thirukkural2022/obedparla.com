import React from 'react';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../layout/Layout';

import PostListing from '../components/PostListing/PostListing';
import config from '../../data/SiteConfig';
import { usePostFields } from '../hooks/usePostFields';
import {
  CategoryButton,
  CategoryContainer,
} from '../components/CategoryButton';

const CategoryTemplate = props => {
  const { category } = props.pageContext;
  const postFields = usePostFields(props.data.posts.edges);

  return (
    <Layout>
      <h1>{category}</h1>
      <Helmet
        title={`Articles in category "${category}" | ${config.siteTitle}`}
      />
      <CategoryContainer>
        {props.data.categories.distinct.map(cat => (
          <CategoryButton key={cat} tabIndex={0} as={Link} to={`/${cat}/`}>
            {cat}
          </CategoryButton>
        ))}
      </CategoryContainer>
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
            date
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
