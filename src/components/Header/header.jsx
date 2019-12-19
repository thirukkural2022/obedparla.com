import React from 'react';
import Toggle from 'react-toggle';

import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { ThemeContext } from '../../theming/ThemeContext';
import { MobileHamburguer } from './components/MobileHamburguer';

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

  &[aria-current='page'] {
    font-weight: bold;
  }
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
      background: ${props.theme.navigationBg};
      box-shadow: rgba(0, 0, 0, 0.15) 0 1px 4px 0;
      transition: all 250ms ease-in-out 0s;
    `}
`;

const MobileHeaderLink = styled(HeaderLink)`
  @media (${({ theme }) => theme.media.desktop}) {
    display: none;
  }
`;

const Logo = styled.a`
  color: ${({ theme }) => theme.textColor};
  font-size: 1.2rem;
  letter-spacing: -1px;
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;

  ${props => css`
    @media (${props.theme.media.mobile}) {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: ${props.theme.backgroundColor};
      display: ${props.hidden ? 'flex' : 'none'};
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: ${props.theme.containerSpace};

      ${HeaderLink}, ${MobileHeaderLink} {
        padding-bottom: 40px;
        font-size: 1.8rem;
      }
    }
  `}
`;

export const Header = props => {
  const [isSticky, setIsSticky] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleScroll = () => {
    setIsSticky(window.scrollY > 0);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Nav sticky={isSticky}>
      <StyledHeader>
        <Logo href='/'>Obed Parlapiano</Logo>
        <LinksContainer hidden={menuOpen}>
          <MobileHeaderLink as={Link} to='/'>
            Home
          </MobileHeaderLink>
          <HeaderLink as={Link} to='/blog'>
            Blog
          </HeaderLink>
          <HeaderLink as={Link} to='/about'>
            About
          </HeaderLink>
          <HeaderLink href='https://www.goodreads.com/review/list/37832424-obed-m-parlapiano?shelf=read&sort=date_read&utm_campaign=mybooksnav&utm_content=mybooks_cta&utm_medium=web&utm_source=homepage'>
            Bookshelf
          </HeaderLink>
          <MobileHeaderLink href='https://twitter.com/obedparla'>
            @obedparla
          </MobileHeaderLink>
          <ToggleTheme />
        </LinksContainer>
        <MobileHamburguer
          setMenuOpen={() => setMenuOpen(!menuOpen)}
          menuOpen={menuOpen}
        />
      </StyledHeader>
    </Nav>
  );
};

const ToggleTheme = () => {
  const themeContext = React.useContext(ThemeContext);

  return (
    <Toggle
      defaultChecked={themeContext.darkMode}
      aria-label='No label tag'
      onChange={themeContext.toggleDarkMode}
    />
  );
};
