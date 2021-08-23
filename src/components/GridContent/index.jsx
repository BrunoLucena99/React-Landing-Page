import { Container, HTMLContainer } from './styles';
import P from 'prop-types';
import SectionBackground from '../SectionBackground';
import Heading from '../Heading';
import TextComponent from '../TextComponent';

const GridContent = ({ title, html, hasBackground = false }) => {
  return (
    <SectionBackground hasBackground={hasBackground}>
      <Container>
        <Heading colorDark={!hasBackground}>{title}</Heading>
        <HTMLContainer>
          <TextComponent>{html}</TextComponent>
        </HTMLContainer>
      </Container>
    </SectionBackground>
  );
};

GridContent.propTypes = {
  title: P.string.isRequired,
  html: P.string.isRequired,
  hasBackground: P.bool,
};

export default GridContent;
