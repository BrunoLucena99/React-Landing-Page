import P from 'prop-types';
import { Container } from './styles';

const TextComponent = ({ children }) => <Container>{children}</Container>;

TextComponent.propTypes = {
  children: P.node.isRequired,
};

export default TextComponent;
