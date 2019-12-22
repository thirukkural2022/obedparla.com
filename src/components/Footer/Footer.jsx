import React from 'react';
import styled from '@emotion/styled';

import config from '../../../data/SiteConfig';
import { Container } from '../../layout/components/container';
import { GithubIcon, RssIcon, TwitterIcon } from './components/Icons';

const Footer = () => (
  <footer>
    <FooterContainer>
      <Container>
        <div>
          <FooterLink
            href='https://twitter.com/obedparla'
            target='_blank'
            rel='noreferrer nofollow'
          >
            <TwitterIcon />
            Follow me on Twitter
          </FooterLink>
        </div>
        <div>
          <FooterLink
            href='https://github.com/obedparla'
            target='_blank'
            rel='noreferrer nofollow'
          >
            <GithubIcon />
            View source on Github
          </FooterLink>
        </div>
        <div>
          <FooterLink
            href={config.siteRss}
            target='_blank'
            rel='noreferrer nofollow'
          >
            <RssIcon />
            Follow the RSS feed
          </FooterLink>
        </div>
      </Container>
    </FooterContainer>
  </footer>
);

export default Footer;

export const FooterContainer = styled.div`
  background: ${({ theme }) => theme.navigationBg};
  border-top: 1px solid ${({ theme }) => theme.lightBackground};

  svg {
    margin-right: 10px;
    stroke: ${({ theme }) => theme.textColor};
  }
`;
export const FooterLink = styled.a`
  text-decoration: none;
  box-shadow: none;
  color: ${({ theme }) => theme.textColor};
`;
