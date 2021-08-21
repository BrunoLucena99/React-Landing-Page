import { renderTheme } from '../../styles/RenderTheme';
import TextComponent from '.';
import { screen } from '@testing-library/react';
import { theme } from '../../styles/theme';

describe('<TextComponent />', () => {
  it('should render correctly', () => {
    renderTheme(<TextComponent>Texto</TextComponent>);
    expect(screen.getByText('Texto')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<TextComponent>Texto</TextComponent>);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        font-size: 2.4rem;
      }

      <p
        class="c0"
      >
        Texto
      </p>
    `);
  });

  it('should render with correct font size', () => {
    renderTheme(<TextComponent>Texto</TextComponent>);
    const component = screen.getByText('Texto');
    expect(component).toHaveStyle({
      'font-size': theme.font.sizes.medium,
    });
  });
});
