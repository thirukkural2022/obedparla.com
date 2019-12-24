import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import Layout from '../layout/Layout';
import PostListing from '../components/PostListing/PostListing';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';
import { usePostFields } from '../hooks/usePostFields';
import {
  CategoryButton,
  CategoryContainer,
} from '../components/CategoryButton';

const ArticlesSearch = styled.input`
  display: block;
  padding: 3px 8px;
  border-radius: 5px;
  border: 2px solid #ccc;
  width: 90%;
  background: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.textColor};

  &:focus {
    border-color: ${({ theme }) => theme.highlightColor};
    outline: none;
    color: ${({ theme }) => theme.textColor};
    background: ${({ theme }) => theme.backgroundColor};
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TotalCount = styled.div`
  color: ${({ theme }) => theme.highlightColor};
  font-size: 1.2rem;
`;

const SearchLabel = styled.label`
  font-size: 0.9rem;
  display: block;
  margin-top: 10px;
`;

const BlogPage = props => {
  const [category, setCategory] = React.useState(null);
  const [search, setSearch] = React.useState('');
  const [articlesToShow, setArticlestoShow] = React.useState(4);

  const handleScroll = () => {
    // If the user scrolls 80% down to the end of the page, load more items
    if (
      (window.innerHeight + document.documentElement.scrollTop) * 1.2 <
      document.documentElement.offsetHeight
    ) {
      return;
    }

    setArticlestoShow(prevState => prevState + 10);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const postEdges = props.data.allMarkdownRemark.edges;

  const allCategories = React.useMemo(() => {
    const categoriesSet = new Set();
    postEdges.forEach(post => {
      post.node.frontmatter.categories.forEach(cat => categoriesSet.add(cat));
    });
    return categoriesSet;
  }, [postEdges]);

  const postFields = usePostFields(postEdges);

  const allPosts = React.useMemo(() => {
    let postList = postFields;

    if (category) {
      postList = postList.filter(post => post.categories.includes(category));
    }

    if (search) {
      postList = postList.filter(
        post =>
          post.title.toLowerCase().includes(search) ||
          post.path.includes(search) ||
          post.categories.includes(search) ||
          post.excerpt.toLowerCase().includes(search),
      );
    }

    return postList;
  }, [category, search]);

  return (
    <Layout>
      <h1
        css={css`
          margin-top: 0;
        `}
      >
        All articles
      </h1>

      <CategoryContainer>
        {[...allCategories].map(cat => (
          <CategoryButton
            key={cat}
            tabIndex={0}
            onClick={e => {
              e.preventDefault();
              window.history.pushState({}, '', `/${cat}/`);
              setCategory(cat === category ? null : cat);
            }}
            isSelected={cat === category}
            to={`/${cat}/`}
          >
            {cat.replace('-', ' ')}
          </CategoryButton>
        ))}

        <SearchLabel htmlFor='search-articles'>Search for articles</SearchLabel>
        <SearchContainer>
          <ArticlesSearch
            id='search-articles'
            placeholder='Type here to filter articles . . .'
            value={search}
            onChange={e => setSearch(e.target.value.toLowerCase())}
          />
          <TotalCount>{allPosts.length}</TotalCount>
        </SearchContainer>
      </CategoryContainer>

      <div className='listing-container'>
        <div className='posts-container'>
          <Helmet title={`Articles - ${config.siteTitle}`} />
          <SEO />
          <PostListing postList={allPosts.slice(0, articlesToShow)} isBig />
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
            date
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
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
  }
`;
