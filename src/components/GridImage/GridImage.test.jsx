import { renderTheme } from '../../styles/RenderTheme';
import GridImage from '.';
import mock from '../../mocks/GridImage';
import { screen } from '@testing-library/react';

describe('<GridImage />', () => {
  it('should render correctly', () => {
    const { container } = renderTheme(<GridImage {...mock} />);
    expect(screen.getAllByRole('img')).toHaveLength(mock.grid.length);
    expect(container.firstChild).toMatchSnapshot();
  });
});
