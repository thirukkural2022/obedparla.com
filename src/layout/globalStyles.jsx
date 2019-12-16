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
        }

        p > img {
          width: calc(100% + (${theme.containerSpace} * 2));
          margin-left: -${theme.containerSpace};
        }
      `}
    />
  );
};

export default GlobalStyles;
