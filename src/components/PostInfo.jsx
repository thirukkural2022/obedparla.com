import React from 'react';
import PropTypes from 'prop-types';

export const PostInfo = ({ timeToRead }) => (
  <small>
    <span>{`${timeToRead} min read`}</span>
  </small>
);

PostInfo.propTypes = {
  timeToRead: PropTypes.number.isRequired,
};
