import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  max-width: 58rem;
  margin: 0 auto;
`;

export const HTMLContainer = styled.div`
  margin: ${({ theme }) => theme.spacings.xhuge} 0;
`;
