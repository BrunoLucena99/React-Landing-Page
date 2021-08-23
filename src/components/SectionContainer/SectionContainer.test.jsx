import { renderTheme } from '../../styles/RenderTheme';
import SectionContainer from '.';
import { screen } from '@testing-library/react';

describe('<SectionContainer />', () => {
  it('should render correctly with default values', () => {
    const { container } = renderTheme(
      <SectionContainer>
        <h1>Teste</h1>
      </SectionContainer>,
    );
    expect(screen.getByRole('heading', 'Teste')).toBeInTheDocument();
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        max-width: 120rem;
        margin: 0 auto;
        padding: 3.2rem;
      }

      <div
        class="c0"
      >
        <h1>
          Teste
        </h1>
      </div>
    `);
  });
});
