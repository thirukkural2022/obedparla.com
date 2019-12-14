import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import { formatDate } from '../../utils/global';

const PostListing = props => {
  return (
    <PostListContainer>
      {props.postList.map(post => (
        <PostItem>
          <StyledLink to={post.path} key={post.title}>
            {post.cover && <Img fluid={post.cover.childImageSharp.fluid} />}
            <ListItemHeader>{post.title}</ListItemHeader>
          </StyledLink>
          <Excerpt>{post.excerpt}</Excerpt>
          <small>
            <span>{formatDate(post.date)}</span>
            {' - '}
            <span>{`${post.timeToRead} minutes read`}</span>
          </small>
        </PostItem>
      ))}
    </PostListContainer>
  );
};

const Excerpt = styled.p`
  margin-bottom: 0;
`;
const StyledLink = styled(Link)`
  color: inherit;
  box-shadow: none;
  display: block;
`;

const PostItem = styled.div`
  margin-bottom: 50px;
`;

const PostListContainer = styled.section``;

const ListItemHeader = styled.div`
  font-weight: bold;
  margin: 10px 0 0px;
  font-size: 20px;
`;

export default PostListing;
