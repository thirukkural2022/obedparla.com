import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import { formatDate } from '../../utils/global';

const PostListing = ({ postList, isBig }) => {
  return (
    <PostListContainer>
      {postList &&
        postList.map(post => (
          <PostItem key={post.path} isBig={isBig}>
            <StyledLink to={post.path} key={post.title} isBig={isBig}>
              {post.cover && post.cover.childImageSharp.fixed && (
                <Img fixed={post.cover.childImageSharp.fixed} />
              )}
            </StyledLink>
            <PostItemContent>
              <StyledLink to={post.path} key={post.title} isBig={isBig}>
                {post.cover && post.cover.childImageSharp.fluid && (
                  <Img fluid={post.cover.childImageSharp.fluid} />
                )}
                <ListItemHeader isBig={isBig}>{post.title}</ListItemHeader>
              </StyledLink>
              {post.excerpt && <Excerpt>{post.excerpt}</Excerpt>}
              <small>
                <span>{formatDate(post.date)}</span>
                {post.timeToRead && (
                  <span>{` - ${post.timeToRead} min read`}</span>
                )}
              </small>
            </PostItemContent>
          </PostItem>
        ))}
    </PostListContainer>
  );
};

const PostItemContent = styled.div``;

const Excerpt = styled.p`
  margin-bottom: 0;
`;
const StyledLink = styled(Link)`
  color: inherit;
  box-shadow: none;
  display: block;
  margin-right: ${props => (props.isBig ? '0' : '20px')};
`;

const PostItem = styled.div`
  margin-bottom: ${props => (props.isBig ? '50px' : '20px')};
  display: flex;
`;

const PostListContainer = styled.section``;

const ListItemHeader = styled.div`
  font-weight: bold;
  margin-top: ${props => (props.isBig ? '10px' : '0')};
  font-size: 20px;
`;

export default PostListing;
