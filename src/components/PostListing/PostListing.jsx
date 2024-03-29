import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import { PostInfo } from '../PostInfo';

const PostListing = ({ postList, isBig }) => {
  return (
    <PostListContainer>
      {postList &&
        postList.map(post => {
          const ariaLabel = `Visit ${post.title}`;
          return (
            <PostItem key={post.path} isBig={isBig}>
              {post.cover && (
                <StyledLink to={post.path} isBig={isBig} aria-label={ariaLabel}>
                  {post.cover && post.cover.childImageSharp.fixed && (
                    <Img fixed={post.cover.childImageSharp.fixed} />
                  )}
                </StyledLink>
              )}
              <PostItemContent>
                <StyledLink to={post.path} isBig={isBig} aria-label={ariaLabel}>
                  {post.cover && post.cover.childImageSharp.fluid && (
                    <Img fluid={post.cover.childImageSharp.fluid} />
                  )}
                  <ListItemHeader as={isBig ? 'h2' : 'h3'} isBig={isBig}>
                    {post.title}
                  </ListItemHeader>
                </StyledLink>
                {post.excerpt && <Excerpt>{post.excerpt}</Excerpt>}
                <PostInfo timeToRead={post.timeToRead} />
              </PostItemContent>
            </PostItem>
          );
        })}
    </PostListContainer>
  );
};

const PostItemContent = styled.div``;

const Excerpt = styled.p`
  margin-bottom: 0;
`;
const StyledLink = styled(({ isBig, ...rest }) => <Link {...rest} />)`
  color: inherit;
  box-shadow: none;
  display: block;
  margin-right: ${props => (props.isBig ? '0' : '1.125rem')};
  font-size: 0;
`;

const PostItem = styled.div`
  margin-bottom: ${props => (props.isBig ? '30px' : '1.125rem')};
  display: flex;
`;

const PostListContainer = styled.section``;

const ListItemHeader = styled.h2`
  font-weight: bold;
  margin-top: ${props => (props.isBig ? '0.625rem' : '0')};
  margin-bottom: ${props => (!props.isBig ? '0' : '0.5rem')};
  font-size: ${props => !props.isBig && '1.25rem'};
`;

export default PostListing;
