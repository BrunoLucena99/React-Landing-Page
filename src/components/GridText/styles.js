import styled from 'styled-components';
import { Title as HeadingTitle } from '../Heading/styles';

export const Container = styled.div``;

export const Grid = styled.div`
  counter-reset: grid-counter;
  display: grid;
  gap: ${({ theme }) => theme.spacings.large};
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  margin-top: ${({ theme }) => theme.spacings.xhuge};
`;

export const GridElement = styled.div`
  ${HeadingTitle} {
    position: relative;
    left: 5rem;
  }

  ${HeadingTitle}::before {
    counter-increment: grid-counter;
    content: counter(grid-counter);
    position: absolute;
    font-size: 7rem;
    top: -3rem;
    left: -5rem;
    transform: rotate(5deg);
  }
`;
