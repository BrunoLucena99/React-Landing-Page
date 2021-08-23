import { renderTheme } from '../../styles/RenderTheme';
import GridTwoColumns from '.';
import { screen } from '@testing-library/react';
import mock from '../../mocks/GridTwoColumns';

describe('<GridTwoColumns />', () => {
  it('should render correctly with default values', () => {
    const { container } = renderTheme(<GridTwoColumns {...mock} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should correctly when background is setted', () => {
    const { container } = renderTheme(
      <GridTwoColumns {...mock} hasBackground />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should image showing correctly', () => {
    renderTheme(<GridTwoColumns {...mock} />);
    expect(screen.getByRole('img', { src: mock.image })).toBeInTheDocument();
  });
});
