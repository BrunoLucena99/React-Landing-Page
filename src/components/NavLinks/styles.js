import styled, { css } from 'styled-components';

export const Container = styled.nav`
  display: flex;
  flex-flow: row wrap;

  ${({ theme }) => css`
    @media ${theme.media.lteMedium} {
      flex-flow: column nowrap;
      align-items: center;
      justify-content: center;
    }
  `}
`;
