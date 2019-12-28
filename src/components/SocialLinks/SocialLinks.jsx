import React, { Component } from 'react';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  RedditShareButton,
  RedditIcon,
} from 'react-share';
import urljoin from 'url-join';
import config from '../../../data/SiteConfig';
import { StyledSocialLinks } from './styles';

class SocialLinks extends Component {
  render() {
    const { postNode, postPath, mobile } = this.props;
    const post = postNode.frontmatter;
    const url = urljoin(config.siteUrl, config.pathPrefix, postPath);
    const iconSize = mobile ? 36 : 48;

    return (
      <StyledSocialLinks>
        <TwitterShareButton url={url} title={post.title}>
          <TwitterIcon round size={iconSize} />
        </TwitterShareButton>
        <FacebookShareButton url={url} quote={postNode.excerpt}>
          <FacebookIcon round size={iconSize} />
        </FacebookShareButton>
        <LinkedinShareButton
          url={url}
          title={post.title}
          description={postNode.excerpt}
        >
          <LinkedinIcon round size={iconSize} />
        </LinkedinShareButton>
        <RedditShareButton url={url} title={post.title}>
          <RedditIcon round size={iconSize} />
        </RedditShareButton>
      </StyledSocialLinks>
    );
  }
}

export default SocialLinks;
