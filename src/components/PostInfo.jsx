import React from 'react';
import PropTypes from 'prop-types';

export const PostInfo = ({ date, timeToRead }) => (
  <small>
    <span>{date}</span>
    <span>{` - ${timeToRead} min read`}</span>
  </small>
);

PostInfo.propTypes = {
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
};
