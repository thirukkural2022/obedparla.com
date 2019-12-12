import React from "react";
import PropTypes from "prop-types";
import config from "../../../data/SiteConfig";
import styled from "@emotion/styled";

const StyledHeader = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  background: ${({ theme }) => theme.backgroundColor};
`;

export const Header = props => (
  <nav>
    <StyledHeader>
      <a href="/">{config.siteTitle}</a>
      <a href="/posts">Blog</a>
    </StyledHeader>
  </nav>
);

Header.propTypes = {};
