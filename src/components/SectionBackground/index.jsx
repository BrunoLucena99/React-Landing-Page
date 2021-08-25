import P from 'prop-types';
import SectionContainer from '../SectionContainer';
import { Container } from './styles';

const SectionBackground = ({ children, sectionId = '', ...props }) => (
  <Container id={sectionId} {...props}>
    <SectionContainer>{children}</SectionContainer>
  </Container>
);

SectionBackground.propTypes = {
  children: P.node.isRequired,
  hasBackground: P.bool,
  sectionId: P.string,
};

export default SectionBackground;
