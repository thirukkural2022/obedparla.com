import React from 'react';
import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: ${({ theme }) => theme.containerSize};
  padding: calc(${({ theme }) => theme.containerSpace} * 2)
    ${({ theme }) => theme.containerSpace};
  margin-left: auto;
  margin-right: auto;
`;
