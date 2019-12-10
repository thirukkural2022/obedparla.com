import React from "react";
import PropTypes from "prop-types";

export const Container = props => (
  <div
    css={`
      max-width: 650px;
      padding: 0 var(--container-space);
      margin-left: auto;
      margin-right: auto;
    `}
  >
    {props.children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired
};
