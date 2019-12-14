import React from 'react';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import Layout from '../layout/Layout';
import PostListing from '../components/PostListing/PostListing';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';

const Category = styled.span`
  display: inline-block;
  padding: 5px 8px;
  background: #81a2be;
  margin: 3px;
  border-radius: 4px;
  cursor: pointer;
  text-transform: capitalize;
  color: #fff;

  ${({ selected }) =>
    selected &&
    css`
      background: #8abeb7;
    `}
`;

const BlogPage = props => {
  const [categories, setCategory] = React.useState([]);
  const postEdges = props.data.allMarkdownRemark.edges;

  const allCategories = React.useMemo(() => {
    const categoriesSet = new Set();
    postEdges.forEach(post => {
      post.node.frontmatter.categories.forEach(cat => categoriesSet.add(cat));
    });

    return categoriesSet;
  }, [postEdges]);

  const allPosts = React.useMemo(() => {
    let postList = [];
    postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
        categories: postEdge.node.frontmatter.categories,
      });
    });

    if (categories.length > 0) {
      postList = postList.filter(post => {
        let included = 0;
        categories.forEach(category => {
          if (post.categories.includes(category)) {
            included += 1;
          }
        });

        return included === categories.length;
      });
    }

    return postList;
  }, [postEdges, categories]);

  return (
    <Layout>
      <h1>All articles</h1>
      <h2>Categories</h2>

      {[...allCategories].map(cat => (
        <Category
          onClick={() =>
            setCategory(
              categories.includes(cat)
                ? categories.filter(category => category !== cat)
                : [...categories, cat],
            )
          }
          selected={categories.includes(cat)}
        >
          {cat.replace('-', ' ')}
        </Category>
      ))}

      <div className='listing-container'>
        <div className='posts-container'>
          <Helmet title={config.siteTitle} />
          <SEO />
          <PostListing postList={allPosts} />
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;

/* eslint no-undef: "off" */
export const listingQuery = graphql`
  query Blogquery {
    allMarkdownRemark(sort: { fields: [fields___date], order: DESC }) {
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
            categories
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
  }
`;
