import { renderTheme } from '../../styles/RenderTheme';
import GridText from '.';
import mock from '../../mocks/GridText';

describe('<GridText />', () => {
  it('should render correctly', () => {
    const { container } = renderTheme(<GridText {...mock} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
