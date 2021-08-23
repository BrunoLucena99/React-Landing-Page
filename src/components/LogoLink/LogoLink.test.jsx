import { renderTheme } from '../../styles/RenderTheme';
import LogoLink from '.';
import { screen } from '@testing-library/react';

describe('<LogoLink />', () => {
  it('should render component', () => {
    renderTheme(<LogoLink link="#target" text="Logo" />);
    const link = screen.getByRole('link', { name: 'Logo' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '#target');
  });

  it('should render logo image correctly', () => {
    renderTheme(<LogoLink link="#target" text="Logo" image="logo.svg" />);
    const image = screen.getByRole('img', { name: 'Logo' });
    expect(image).toHaveAttribute('src', 'logo.svg');
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <LogoLink link="#target" text="Logo" image="logo.svg" />,
    );
    expect(container).toMatchSnapshot();
  });
});
