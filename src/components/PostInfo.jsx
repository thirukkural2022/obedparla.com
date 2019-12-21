import React from 'react';
import PropTypes from 'prop-types';
import { formatDate } from '../utils/global';

export const PostInfo = ({ date, timeToRead }) => (
  <small>
    <span>{formatDate(date)}</span>
    <span>{` - ${timeToRead} min read`}</span>
  </small>
);

PostInfo.propTypes = {
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
};
