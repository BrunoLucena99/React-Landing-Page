import { renderTheme } from '../../styles/RenderTheme';
import Loading from '.';
import { screen } from '@testing-library/react';
import { theme } from '../../styles/theme';

describe('<Loading />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Loading />);
    expect(container).toMatchSnapshot();
  });
});
