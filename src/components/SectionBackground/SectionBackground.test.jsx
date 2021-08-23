import { renderTheme } from '../../styles/RenderTheme';
import SectionBackground from '.';
import { screen } from '@testing-library/react';
import { theme } from '../../styles/theme';

describe('<SectionBackground />', () => {
  it('should render correctly with default values', () => {
    const { container } = renderTheme(
      <SectionBackground>
        <h1>Teste</h1>
      </SectionBackground>,
    );
    const heading = screen.getByRole('heading', { name: 'Teste' });
    expect(heading).toBeInTheDocument();
    expect(container.firstChild).toHaveStyle({
      'background-color': theme.colors.white,
      color: theme.colors.primaryColor,
    });
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <SectionBackground>
        <h1>Teste</h1>
      </SectionBackground>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with dark theme', () => {
    const { container } = renderTheme(
      <SectionBackground hasBackground>
        <h1>Teste</h1>
      </SectionBackground>,
    );
    const heading = screen.getByRole('heading', { name: 'Teste' });
    expect(heading).toBeInTheDocument();
    expect(container.firstChild).toHaveStyle({
      'background-color': theme.colors.primaryColor,
      color: theme.colors.white,
    });
  });
});
