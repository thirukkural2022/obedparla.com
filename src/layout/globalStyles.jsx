import React from "react";
import { Global, css } from "@emotion/core";
import { useTheme } from "emotion-theming";

const GlobalStyles = () => {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        :root {
          --container-space: 1.5rem;
        }

        html {
          background: ${theme.backgroundColor};
        }

        .anchor,
        .gatsby-resp-image-link {
          box-shadow: none;
        }

        img {
          width: 100%;

          @media (${theme.media.desktop}) {
            border-radius: 5px;
          }
        }
        p > img {
          width: calc(100% + (var(--container-space) * 2));
          margin-left: -var(--container-space);
        }
      `}
    />
  );
};

export default GlobalStyles;