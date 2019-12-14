import React from 'react';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../layout/Layout';

import PostListing from '../components/PostListing/PostListing';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';
import './listing.css';
import { usePostFields } from '../hooks/usePostFields';

const renderPaging = props => {
  const { currentPageNum, pageCount } = props.pageContext;
  const prevPage = currentPageNum - 1 === 1 ? '/' : `/${currentPageNum - 1}/`;
  const nextPage = `/${currentPageNum + 1}/`;
  const isFirstPage = currentPageNum === 1;
  const isLastPage = currentPageNum === pageCount;

  return (
    <div className='paging-container'>
      {!isFirstPage && <Link to={prevPage}>Previous</Link>}
      {[...Array(pageCount)].map((_val, index) => {
        const pageNum = index + 1;
        return (
          <Link
            key={`listing-page-${pageNum}`}
            to={pageNum === 1 ? '/' : `/${pageNum}/`}
          >
            {pageNum}
          </Link>
        );
      })}
      {!isLastPage && <Link to={nextPage}>Next</Link>}
    </div>
  );
};

const Listing = props => {
  console.log('props.data', props.data);
  const postEdges = props.data.allMarkdownRemark.edges;
  console.log('postEdges', postEdges);
  const postFields = usePostFields(postEdges);

  return (
    <Layout>
      <div className='listing-container'>
        <div className='posts-container'>
          <Helmet title={config.siteTitle} />
          <SEO />
          <PostListing postList={postFields} />
        </div>
        {renderPaging(props)}
      </div>
    </Layout>
  );
};

export default Listing;

/* eslint no-undef: "off" */
export const listingQuery = graphql`
  query ListingQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
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
            date
          }
        }
      }
    }
  }
`;
