import P from 'prop-types';
import { Container, TextContainer, ImageContainer, Image } from './styles';
import SectionBackground from '../SectionBackground';
import Heading from '../Heading';
import TextComponent from '../TextComponent';

const GridTwoColumns = ({ title, text, image, hasBackground = false }) => (
  <SectionBackground hasBackground={hasBackground}>
    <Container>
      <TextContainer>
        <Heading as="h2" colorDark={!hasBackground} uppercase>
          {title}
        </Heading>
        <TextComponent>{text}</TextComponent>
      </TextContainer>
      <ImageContainer>
        <Image src={image} />
      </ImageContainer>
    </Container>
  </SectionBackground>
);

GridTwoColumns.propTypes = {
  title: P.string.isRequired,
  text: P.string.isRequired,
  image: P.string.isRequired,
  hasBackground: P.bool,
};

export default GridTwoColumns;
