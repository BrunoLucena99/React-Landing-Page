import { Container } from './styles';
import { KeyboardArrowUp as Icon } from '@styled-icons/material-outlined/KeyboardArrowUp';

const GoTop = () => (
  <Container aria-label="Go to top button" title="Go to top" href="#">
    <Icon />
  </Container>
);

export default GoTop;
