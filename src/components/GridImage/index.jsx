import P from 'prop-types';
import { Container, Grid, GridElement, Image } from './styles';
import SectionBackground from '../SectionBackground';
import Heading from '../Heading';
import TextComponent from '../TextComponent';

const GridImage = ({ title, description, hasBackground = false, grid }) => (
  <SectionBackground hasBackground={hasBackground}>
    <Container>
      <Heading as="h2" colorDark={!hasBackground} size="huge" uppercase>
        {title}
      </Heading>
      <TextComponent>{description}</TextComponent>
      <Grid>
        {grid.map((element, index) => (
          <GridElement key={element.srcImg + index}>
            <Image src={element.srcImg} alt={element.altText} />
          </GridElement>
        ))}
      </Grid>
    </Container>
  </SectionBackground>
);

GridImage.propTypes = {
  hasBackground: P.bool,
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(
    P.shape({
      altText: P.string.isRequired,
      srcImg: P.string.isRequired,
    }),
  ),
};

export default GridImage;
