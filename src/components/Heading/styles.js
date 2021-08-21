import styled, { css } from 'styled-components';

const titleSizes = {
  small: ({ font }) => css`
    font-size: ${font.sizes.medium};
  `,
  medium: ({ font }) => css`
    font-size: ${font.sizes.large};
  `,
  big: ({ font }) => css`
    font-size: ${font.sizes.xlarge};
  `,
  huge: (theme) => css`
    font-size: ${theme.font.sizes.xhuge};
    ${mediaFont(theme)}
  `,
};

const mediaFont = (theme) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.font.sizes.xlarge};
  }
`;

export const Title = styled.h1`
  ${({ theme, colorDark, size, uppercase }) => css`
    color: ${colorDark ? theme.colors.primaryColor : theme.colors.white};
    ${titleSizes[size](theme)};
    text-transform: ${uppercase ? 'uppercase' : 'none'};
  `}
`;
