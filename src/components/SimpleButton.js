import styled from '@emotion/styled';
import { Link } from 'gatsby';
import tinycolor from 'tinycolor2';

export const SimpleButton = styled(Link)`
  display: inline-block;
  background: ${({ theme }) => theme.lightBackground};
  padding: 4px 8px;
  border-radius: 4px;
  border: none;
  box-shadow: none;
  cursor: pointer;
  font-size: 0.8rem;
  position: relative;
  color: ${({ theme }) => theme.textColor};
  opacity: 0.8;

  &:hover {
    background: ${({ theme }) =>
      tinycolor(theme.lightBackground)
        .darken(10)
        .toString()};
  }

  &:active {
    background: ${({ theme }) =>
      tinycolor(theme.lightBackground)
        .darken(40)
        .toString()};
    color: ${({ theme }) => theme.colorNegative};
  }
`;
