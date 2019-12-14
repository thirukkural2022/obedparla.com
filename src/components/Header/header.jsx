import React from "react";
import PropTypes from "prop-types";
import config from "../../../data/SiteConfig";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  max-width: 800px;
  margin: 0 auto;

  a {
    box-shadow: none;
    padding: 20px;
  }
`;

const Nav = styled.nav`
  position: sticky;
  top: 0;
  height: 80px;
  width: 100%;
  background: ${({ theme }) => theme.backgroundColor};
  z-index: 10;

  ${props =>
    props.sticky &&
    css`
      box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 4px 0px;
      transition: background 250ms ease-in-out 0s,
        box-shadow 250ms ease-in-out 0s;
    `}
`;

export const Header = props => (
  <Nav>
    <StyledHeader>
      <a href="/">{config.siteTitle}</a>
      <a href="/blog">Blog</a>
    </StyledHeader>
  </Nav>
);

Header.propTypes = {};
