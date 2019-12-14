import React from 'react';

import config from '../../../data/SiteConfig';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { ThemeContext } from '../../theming/ThemeContext';

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: ${({ theme }) => theme.containerSize};
  margin: 0 auto;
  padding: 0 var(--container-space);

  @media (${({ theme }) => theme.media.mobile}) {
    justify-content: center;
  }

  a {
    box-shadow: none;
  }
`;

const HeaderLink = styled.a`
  margin: 0 12px;
  color: ${({ theme }) => theme.textColor};
  font-size: 1.15rem;
  opacity: 0.8;
`;

const Nav = styled.nav`
  position: sticky;
  top: 0;
  height: 80px;
  width: 100%;
  background: ${({ theme }) => theme.backgroundColor};
  z-index: 10;

  @media (${({ theme }) => theme.media.mobile}) {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 4px 0px;
    height: 60px;
  }

  ${props =>
    props.sticky &&
    css`
      height: 60px;
      background: #fff;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 4px 0px;
      transition: all 250ms ease-in-out 0s;
    `}
`;

const Logo = styled.a`
  color: ${({ theme }) => theme.textColor};
  font-size: 1.2rem;
  letter-spacing: -1px;
`;

const LinksContainer = styled.div`
  @media (${({ theme }) => theme.media.mobile}) {
    display: none;
  }
`;

export const Header = props => {
  const [isSticky, setIsSticky] = React.useState(false);
  const handleScrolll = () => {
    setIsSticky(window.scrollY > 0);
  };
  React.useEffect(() => {
    window.addEventListener('scroll', handleScrolll);

    return () => window.removeEventListener('scroll', handleScrolll);
  }, []);

  return (
    <Nav sticky={isSticky}>
      <StyledHeader>
        <Logo href='/'>Obed Parlapiano</Logo>
        <LinksContainer>
          <HeaderLink href='/blog'>Blog</HeaderLink>
          <HeaderLink href='https://www.goodreads.com/review/list/37832424-obed-m-parlapiano?shelf=read&sort=date_read&utm_campaign=mybooksnav&utm_content=mybooks_cta&utm_medium=web&utm_source=homepage'>
            Bookshelf
          </HeaderLink>
          <ToggleTheme />
        </LinksContainer>
      </StyledHeader>
    </Nav>
  );
};

const ToggleTheme = () => {
  const themeContext = React.useContext(ThemeContext);

  return (
    <button
      type='button'
      css={css`
        padding: 10px 20px;
        position: fixed;
        top: 20px;
        right: 20px;
      `}
      onClick={themeContext.toggleDarkMode}
    >
      Dark Mode
    </button>
  );
};
