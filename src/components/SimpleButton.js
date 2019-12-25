import styled from '@emotion/styled';
import { Link } from 'gatsby';

export const SimpleButton = styled(Link)`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  box-shadow: none;
  cursor: pointer;
  font-size: 0.8rem;
  position: relative;
  color: ${({ theme }) => theme.highlightColor};
  text-transform: capitalize;
  border: 1px solid ${({ theme }) => theme.highlightColor};

  &:hover {
    background: ${({ theme }) => theme.highlightColor};
    color: #fff;
  }
`;
