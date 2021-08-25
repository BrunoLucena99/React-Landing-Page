import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.spacings.large};
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    margin-top: ${theme.spacings.xhuge};

    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const GridElement = styled.div`
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  transition: all 300ms ease-in-out;

  &:hover {
    transform: scale(1.2) rotate(10deg);
  }
`;
