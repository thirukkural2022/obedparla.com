import React from 'react';
import { Global, css } from '@emotion/core';
import { useTheme } from 'emotion-theming';

const GlobalStyles = () => {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        :root {
          --container-space: 1.5rem;

          @media (${theme.media.mobile}) {
            --container-space: 1.125rem;
          }
        }

        html {
          background: ${theme.backgroundColor};
        }

        :focus {
          outline: ${theme.highlightColor} auto 3px;
        }

        .anchor,
        .gatsby-resp-image-link {
          box-shadow: none;
        }

        img {
          width: 100%;
          border-radius: 5px;
          margin: 0;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          text-transform: capitalize;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        div,
        span,
        blockquote {
          color: ${theme.textColor};
        }

        a {
          color: ${theme.highlightColor};
        }

        blockquote {
          border-left: 0.2rem solid ${theme.highlightColor};
          padding-left: 1.5rem;
        }

        .gatsby-resp-image-background-image {
          border-radius: 4px;
        }

        figcaption {
          text-align: center;
          color: ${theme.isDark
            ? 'rgba(241, 241, 241, 0.8)'
            : 'rgba(0, 0, 0, 0.60)'};
          margin-top: 5px;
        }
      `}
    />
  );
};

export default GlobalStyles;
