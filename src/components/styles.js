import styled from '@emotion/styled';

export const SpacingContainer = styled.div`
  display: ${({ display }) => display};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};

  margin-bottom: ${({ marginBottom }) => marginBottom};
  margin-top: ${({ marginTop }) => marginTop};
`;
