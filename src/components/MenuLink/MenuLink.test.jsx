import { renderTheme } from '../../styles/RenderTheme';
import MenuLink from '.';
import { screen } from '@testing-library/react';

describe('<MenuLink />', () => {
  it('should render correctly', () => {
    renderTheme(<MenuLink href="#inicio">Inicio</MenuLink>);
    const element = screen.getByRole('link', { name: 'Inicio' });
    expect(element).toBeInTheDocument();
    expect(element).toHaveAttribute('target', '_self');
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <MenuLink href="#inicio">Inicio</MenuLink>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should open link in a new tab', () => {
    renderTheme(
      <MenuLink href="#inicio" newTab>
        Inicio
      </MenuLink>,
    );
    const element = screen.getByRole('link', { name: 'Inicio' });
    expect(element).toHaveAttribute('target', '_blank');
  });
});
