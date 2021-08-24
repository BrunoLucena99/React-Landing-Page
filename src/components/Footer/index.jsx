import { Container } from './styles';
import TextComponent from '../TextComponent';
import SectionContainer from '../SectionContainer';
import P from 'prop-types';

const Footer = ({ html }) => (
  <Container>
    <SectionContainer>
      <TextComponent>{html}</TextComponent>
    </SectionContainer>
  </Container>
);

Footer.propTypes = {
  html: P.string.isRequired,
};

export default Footer;
