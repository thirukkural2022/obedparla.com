import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import React from 'react';

export const CategoryContainer = styled.div`
  margin-bottom: 40px;
`;

export const CategoryButton = styled(Link)`
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

  ${({ isSelected, theme }) =>
    isSelected &&
    css`
      background: ${theme.highlightColor};
      color: #fff;
    `}
`;

export const CategoriesList = ({ categories }) => {
  const allCategories = ['latest', ...categories];
  const category = window && window.location.pathname.replace(/\//g, '');
  return (
    <CategoryContainer>
      {allCategories.map(cat => {
        const isSelected =
          category === cat || (category === 'blog' && cat === 'latest');
        return (
          <CategoryButton
            isSelected={isSelected}
            key={cat}
            tabIndex={0}
            to={cat === 'latest' ? '/blog/' : `/${cat}/`}
          >
            {cat}
          </CategoryButton>
        );
      })}
    </CategoryContainer>
  );
};
