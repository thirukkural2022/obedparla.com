import styled from '@emotion/styled';

export const StyledSocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin: 8px 0;
  border-top: 1px solid #ccc;
  padding-top: 1.56rem;

  & > div {
    cursor: pointer;
  }

  & svg {
    height: 36px;
    width: 36px;
  }
`;
