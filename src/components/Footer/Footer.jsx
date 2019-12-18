import React, { Component } from 'react';
import { Link } from 'gatsby';
import config from '../../../data/SiteConfig';
import { Container } from '../../layout/components/container';
import styled from '@emotion/styled';
const Footer = () => (
  <footer>
    <FooterContainer>
      <Container>
        <FooterLink href='https://twitter.com/obedparla'>
          Follow me on Twitter
        </FooterLink>
        <FooterLink href='https://github.com/obedparla'>
          View site's source on Github
        </FooterLink>
        <FooterLink href={config.siteRss}>Follow the RSS feed</FooterLink>
      </Container>
    </FooterContainer>
  </footer>
);

export default Footer;

export const FooterContainer = styled.div`
  background: ${({ theme }) => theme.highContrastBg};
  border-top: 1px solid ${({ theme }) => theme.lightBackground};
`;
export const FooterLink = styled.a`
  display: block;
  text-decoration: none;
  box-shadow: none;
  color: ${({ theme }) => theme.textColor};
`;
