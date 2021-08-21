import { renderTheme } from '../../styles/RenderTheme';
import Heading from '.';
import { screen } from '@testing-library/react';
import { theme } from '../../styles/theme';

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.font.sizes.xhuge,
      'text-transform': 'none',
    });
  });

  it('should render with white color', () => {
    renderTheme(<Heading colorDark={false}>Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it('should render with correct small heading size', () => {
    renderTheme(<Heading size="small">Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.medium,
    });
  });

  it('should render with correct big heading size', () => {
    renderTheme(<Heading size="big">Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.xlarge,
    });
  });

  it('should render with correct medium heading size', () => {
    renderTheme(<Heading size="medium">Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.large,
    });
  });

  it('should render with correct huge heading size', () => {
    renderTheme(<Heading size="huge">Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.xhuge,
    });
  });

  it('should render with correct font-size when mobile devices', () => {
    renderTheme(<Heading size="huge">Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyleRule('font-size', theme.font.sizes.xlarge, {
      media: theme.media.lteMedium,
    });
  });

  it('should render with uppercase letters', () => {
    renderTheme(<Heading uppercase>Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  it('should render correct heading element', () => {
    const { container } = renderTheme(<Heading as="h6">Texto</Heading>);
    const h6 = container.querySelector('h6');

    expect(h6.tagName.toLowerCase()).toBe('h6');
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Heading>Texto</Heading>);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        color: #0A1128;
        font-size: 6.4rem;
        text-transform: none;
      }

      @media (max-width:768px) {
        .c0 {
          font-size: 4.0rem;
        }
      }

      <h1
        class="c0"
      >
        Texto
      </h1>
    `);
  });
});
