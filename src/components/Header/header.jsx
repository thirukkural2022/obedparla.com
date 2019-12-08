import React from "react";
import PropTypes from "prop-types";
import config from "../../../data/SiteConfig";

export const Header = props => (
  <nav>
    <div>
      <a href="/">{config.siteTitle}</a>
      <a href="/posts">Blog</a>
    </div>
  </nav>
);

Header.propTypes = {
  children: PropTypes.node.isRequired
};
