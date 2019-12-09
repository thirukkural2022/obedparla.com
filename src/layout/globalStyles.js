import { createGlobalStyle, css } from "styled-components";

const xPadding = 1.5;
const styles = css`
  :root {
    --textLink: green;
  }
  body {
    max-width: 650px;
    padding: 0 ${xPadding}rem;
    margin-left: auto;
    margin-right: auto;
  }

  .anchor,
  .gatsby-resp-image-link {
    box-shadow: none;
  }

  img {
    width: 100%;
  }
  p > img {
    width: calc(100% + ${xPadding * 2}rem);
    margin-left: -${xPadding}rem;
  }

  .gatsby-image-wrapper {
    margin-left: -1.5rem;
    width: calc(100% + 3rem);
  }
  //
  //blockquote {
  //  font-style: italic;
  //  margin: 20px 0;
  //  border-left: 3px solid rgba(0, 0, 0, 0.84);
  //  padding-left: 20px;
  //  padding-bottom: 2px;
  //
  //  cite {
  //    display: block;
  //    margin-top: 14px;
  //    font-size: 1rem;
  //  }
  //
  //  p {
  //    font-size: 1.2rem;
  //    line-height: 1.2em;
  //    margin-bottom: 0;
  //  }
  //}
`;

// eslint-disable-next-line import/prefer-default-export
const globalStyles = createGlobalStyle`
  ${styles}
`;

export default globalStyles;
