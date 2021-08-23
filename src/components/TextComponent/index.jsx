import P from 'prop-types';
import { Container } from './styles';

const TextComponent = ({ children }) => (
  <Container dangerouslySetInnerHTML={{ __html: children }} />
);

TextComponent.propTypes = {
  children: P.node.isRequired,
};

export default TextComponent;
