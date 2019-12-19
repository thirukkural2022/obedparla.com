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
        h6,
        p,
        div,
        span {
          color: ${theme.textColor};
        }

        .react-toggle {
          touch-action: pan-x;

          display: inline-block;
          position: relative;
          cursor: pointer;
          background-color: transparent;
          border: 0;
          padding: 0;

          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;

          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          -webkit-tap-highlight-color: transparent;
        }

        .react-toggle-screenreader-only {
          border: 0;
          clip: rect(0 0 0 0);
          height: 1px;
          margin: -1px;
          overflow: hidden;
          padding: 0;
          position: absolute;
          width: 1px;
        }

        .react-toggle--disabled {
          cursor: not-allowed;
          opacity: 0.5;
          -webkit-transition: opacity 0.25s;
          transition: opacity 0.25s;
        }

        .react-toggle-track {
          width: 50px;
          height: 24px;
          padding: 0;
          border-radius: 30px;
          background-color: #0f1114;
          transition: all 0.2s ease;
        }

        .react-toggle:hover:not(.react-toggle--disabled) .react-toggle-track {
          background-color: #000000;
        }

        .react-toggle--checked .react-toggle-track {
          background-color: #19ab27;
        }

        .react-toggle--checked:hover:not(.react-toggle--disabled)
          .react-toggle-track {
          background-color: #128d15;
        }

        .react-toggle-track-check {
          position: absolute;
          width: 14px;
          height: 10px;
          top: 0px;
          bottom: 0px;
          margin-top: auto;
          margin-bottom: auto;
          line-height: 0;
          left: 8px;
          opacity: 0;
          -webkit-transition: opacity 0.25s ease;
          -moz-transition: opacity 0.25s ease;
          transition: opacity 0.25s ease;
        }

        .react-toggle--checked .react-toggle-track-check {
          opacity: 1;
          -webkit-transition: opacity 0.25s ease;
          -moz-transition: opacity 0.25s ease;
          transition: opacity 0.25s ease;
        }

        .react-toggle-track-x {
          position: absolute;
          width: 10px;
          height: 10px;
          top: 0px;
          bottom: 0px;
          margin-top: auto;
          margin-bottom: auto;
          line-height: 0;
          right: 10px;
          opacity: 1;
          -webkit-transition: opacity 0.25s ease;
          -moz-transition: opacity 0.25s ease;
          transition: opacity 0.25s ease;
        }

        .react-toggle--checked .react-toggle-track-x {
          opacity: 0;
        }

        .react-toggle-thumb {
          position: absolute;
          top: 1px;
          left: 1px;
          width: 22px;
          height: 22px;
          border: 1px solid #4d4d4d;
          border-radius: 50%;
          background-color: #fafafa;

          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          transition: all 0.25s ease;
        }

        .react-toggle--checked .react-toggle-thumb {
          left: 27px;
          border-color: #19ab27;
        }

        .react-toggle--focus .react-toggle-thumb {
          -webkit-box-shadow: 0px 0px 3px 2px #0099e0;
          -moz-box-shadow: 0px 0px 3px 2px #0099e0;
          box-shadow: 0px 0px 2px 3px #0099e0;
        }

        .react-toggle:active:not(.react-toggle--disabled) .react-toggle-thumb {
          -webkit-box-shadow: 0px 0px 5px 5px #0099e0;
          -moz-box-shadow: 0px 0px 5px 5px #0099e0;
          box-shadow: 0px 0px 5px 5px #0099e0;
        }
      `}
    />
  );
};

export default GlobalStyles;
