import styled from '@emotion/styled';

export const Article = styled.article`
  .gatsby-image-wrapper {
    @media (${({ theme }) => theme.media.mobile}) {
      img {
        border-radius: 0;
      }
    }
  }
`;
