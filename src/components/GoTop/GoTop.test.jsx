import { renderTheme } from '../../styles/RenderTheme';
import GoTop from '.';
import { screen } from '@testing-library/react';

describe('<GoTop />', () => {
  it('should render correctly', () => {
    const { container } = renderTheme(<GoTop />);
    const link = screen.getByRole('link', { name: 'Go to top button' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '#');
    expect(container.firstChild).toMatchSnapshot();
  });
});
