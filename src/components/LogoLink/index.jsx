import { Container } from './styles';
import Heading from '../Heading';
import P from 'prop-types';

const LogoLink = ({ text, image, link }) => (
  <Heading size="small" uppercase>
    <Container href={link} target="_blank">
      {image ? <img src={image} alt={text} /> : <span>{text}</span>}
    </Container>
  </Heading>
);

LogoLink.propTypes = {
  text: P.string.isRequired,
  image: P.string,
  link: P.string.isRequired,
};

export default LogoLink;
