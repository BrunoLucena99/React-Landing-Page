import P from 'prop-types';
import { Container } from './styles';

const SectionContainer = ({ children }) => <Container>{children}</Container>;

SectionContainer.propTypes = {
  children: P.node.isRequired,
};

export default SectionContainer;
