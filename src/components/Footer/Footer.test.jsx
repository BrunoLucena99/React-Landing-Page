import { renderTheme } from '../../styles/RenderTheme';
import Footer from '.';
import { screen } from '@testing-library/react';

const htmlText = `<p><a href="https://github.com/BrunoLucena99">Feito por Bruno Lucena</a></p>`;

describe('<Footer />', () => {
  it('should render correctly', () => {
    const { container } = renderTheme(<Footer html={htmlText} />);
    expect(
      screen.getByRole('link', { name: 'Feito por Bruno Lucena' }),
    ).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
