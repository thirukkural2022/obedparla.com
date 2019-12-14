import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import { formatDate } from '../../utils/global';

const PostListing = ({ postList }) => {
  return (
    <PostListContainer>
      {postList &&
        postList.map(post => (
          <PostItem key={post.path}>
            <StyledLink to={post.path} key={post.title}>
              {post.cover && post.cover.childImageSharp.fluid && (
                <Img fluid={post.cover.childImageSharp.fluid} />
              )}
              {post.cover && post.cover.childImageSharp.fixed && (
                <Img fixed={post.cover.childImageSharp.fixed} />
              )}
              <ListItemHeader>{post.title}</ListItemHeader>
            </StyledLink>
            {post.excerpt && <Excerpt>{post.excerpt}</Excerpt>}
            <small>
              <span>{formatDate(post.date)}</span>
              {post.timeToRead && (
                <span>{` - ${post.timeToRead} min read`}</span>
              )}
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
