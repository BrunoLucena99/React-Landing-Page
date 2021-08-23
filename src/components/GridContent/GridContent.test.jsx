import { renderTheme } from '../../styles/RenderTheme';
import GridContent from '.';
import mock from '../../mocks/GridContent';

describe('<GridContent />', () => {
  it('should render correctly', () => {
    const { container } = renderTheme(<GridContent {...mock} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
