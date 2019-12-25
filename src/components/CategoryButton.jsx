import styled from '@emotion/styled';
import { css } from '@emotion/core';
import React from 'react';
import { SimpleButton } from './SimpleButton';

export const CategoryContainer = styled.div`
  margin-bottom: 40px;
`;

export const CategoryButton = styled(({ isSelected, ...rest }) => (
  <SimpleButton {...rest} />
))`
  margin: 3px;
  font-size: 0.9rem;

  ${({ isSelected, theme }) =>
    isSelected &&
    css`
      background: ${theme.highlightColor};
      color: #fff;
    `};
`;

const allPostsName = 'all';
export const CategoriesList = ({ categories }) => {
  const allCategories = [allPostsName, ...categories];
  const category =
    typeof window !== 'undefined' &&
    window.location.pathname.replace(/\//g, '');
  return (
    <CategoryContainer>
      {allCategories.map(cat => {
        const isSelected =
          category === cat || (category === 'blog' && cat === allPostsName);
        return (
          <CategoryButton
            isSelected={isSelected}
            key={cat}
            tabIndex={0}
            to={cat === allPostsName ? '/blog/' : `/${cat}/`}
          >
            {cat}
          </CategoryButton>
        );
      })}
    </CategoryContainer>
  );
};
