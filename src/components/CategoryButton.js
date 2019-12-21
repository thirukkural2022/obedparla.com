import styled from '@emotion/styled';
import { css } from '@emotion/core';

export const CategoryContainer = styled.div`
  margin-bottom: 40px;
`;

export const CategoryButton = styled.span`
  display: inline-block;
  padding: 5px 12px;
  background: ${({ theme }) => theme.softHighlight};
  margin: 3px;
  border-radius: 4px;
  cursor: pointer;
  text-transform: capitalize;
  color: ${({ theme }) => theme.highlightColor};
  font-size: 0.9rem;
  box-shadow: none;

  ${({ selected, theme }) =>
    selected &&
    css`
      background: ${theme.highlightColor};
      color: #fff;
    `}
`;
