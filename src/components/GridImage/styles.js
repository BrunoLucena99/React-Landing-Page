import styled from 'styled-components';
import { Title as HeadingTitle } from '../Heading/styles';

export const Container = styled.div``;

export const Grid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacings.large};
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  margin-top: ${({ theme }) => theme.spacings.xhuge};
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
