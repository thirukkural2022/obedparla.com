import React, { Component } from 'react';
import { Link } from 'gatsby';
import config from '../../../data/SiteConfig';
import { Container } from '../../layout/components/container';
import styled from '@emotion/styled';
import { GithubIcon, RssIcon, TwitterIcon } from './components/Icons';
const Footer = () => (
  <footer>
    <FooterContainer>
      <Container>
        <div>
          <TwitterIcon />
          <FooterLink href='https://twitter.com/obedparla'>
            Follow me on Twitter
          </FooterLink>
        </div>
        <div>
          <GithubIcon />
          <FooterLink href='https://github.com/obedparla'>
            View source on Github
          </FooterLink>
        </div>
        <div>
          <RssIcon />
          <FooterLink href={config.siteRss}>Follow the RSS feed</FooterLink>
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
