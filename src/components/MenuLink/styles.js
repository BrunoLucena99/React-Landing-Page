import styled from 'styled-components';

export const Container = styled.a`
  font-size: ${({ theme }) => theme.font.sizes.small};
  display: block;
  text-decoration: none;
  padding: ${({ theme }) => theme.spacings.small};
  color: ${({ theme }) => theme.colors.primaryColor};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0.2rem;
    background: ${({ theme }) => theme.colors.secondaryColor};
    transition: all 300ms ease-in-out;
  }

  &:hover::after {
    left: 25%;
    width: 50%;
  }
`;
