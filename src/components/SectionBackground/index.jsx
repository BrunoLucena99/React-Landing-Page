import P from 'prop-types';
import SectionContainer from '../SectionContainer';
import { Container } from './styles';

const SectionBackground = ({ children, ...props }) => (
  <Container {...props}>
    <SectionContainer>{children}</SectionContainer>
  </Container>
);

SectionBackground.propTypes = {
  children: P.node.isRequired,
  hasBackground: P.bool,
};

export default SectionBackground;
