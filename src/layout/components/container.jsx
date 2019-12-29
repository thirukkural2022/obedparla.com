import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: ${({ theme }) => theme.containerSize};
  padding: ${({ theme }) => theme.containerSpace};
  margin-left: auto;
  margin-right: auto;
`;
