import React from 'react';
import PropTypes from 'prop-types';

export const NewsletterIframe = props => (
  <iframe
    width={props.width || '100%'}
    height={props.height || '300px'}
    src='https://obedparla.substack.com/embed'
    frameBorder='0'
    scrolling='no'
    css={{ margin: props.margin || 0 }}
  />
);

NewsletterIframe.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  margin: PropTypes.string,
};
