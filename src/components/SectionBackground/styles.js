import styled, { css } from 'styled-components';

const activateBackground = (theme) => css`
  background-color: ${theme.colors.primaryColor};
  color: ${theme.colors.white};
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primaryColor};
  ${({ theme, hasBackground }) => hasBackground && activateBackground(theme)}
  min-height: 100vh;
  display: flex;
  align-items: center;
`;
