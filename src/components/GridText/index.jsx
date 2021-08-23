import { Container, Grid, GridElement } from './styles';
import P from 'prop-types';
import SectionBackground from '../SectionBackground';
import Heading from '../Heading';
import TextComponent from '../TextComponent';

const GridText = ({ title, description, grid, hasBackground }) => (
  <SectionBackground hasBackground={hasBackground}>
    <Container>
      <Heading colorDark={!hasBackground} size="huge" uppercase>
        {title}
      </Heading>
      <TextComponent>{description}</TextComponent>
      <Grid>
        {grid.map((element, index) => (
          <GridElement key={element.title + index}>
            <Heading colorDark={!hasBackground} size="medium">
              {title}
            </Heading>
            <TextComponent>{description}</TextComponent>
          </GridElement>
        ))}
      </Grid>
    </Container>
  </SectionBackground>
);

GridText.propTypes = {
  hasBackground: P.bool,
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      description: P.string.isRequired,
    }),
  ).isRequired,
};

export default GridText;
