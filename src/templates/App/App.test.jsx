import { screen } from '@testing-library/react';
import Home from '.';
import { renderTheme } from '../../styles/RenderTheme';
import { theme } from '../../styles/theme';

describe('<Home />', () => {
  it('should render Home', () => {
    renderTheme(<Home />);
  });
});
