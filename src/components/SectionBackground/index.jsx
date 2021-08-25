import P from 'prop-types';
import SectionContainer from '../SectionContainer';
import { Container } from './styles';

import { randomSectionId } from '../../utils/functions';

const SectionBackground = ({ children, sectionId = '', ...props }) => (
  <Container id={sectionId || randomSectionId()} {...props}>
    <SectionContainer>{children}</SectionContainer>
  </Container>
);

SectionBackground.propTypes = {
  children: P.node.isRequired,
  hasBackground: P.bool,
  sectionId: P.string,
};

export default SectionBackground;
