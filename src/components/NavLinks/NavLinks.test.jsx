import { renderTheme } from '../../styles/RenderTheme';
import NavLinks from '.';
import { screen } from '@testing-library/react';
import links from '../../mocks/links';
import { theme } from '../../styles/theme';

describe('<NavLinks />', () => {
  it('should render correctly', () => {
    renderTheme(<NavLinks links={links} />);
    expect(screen.getAllByRole('link')).toHaveLength(links.length);
  });

  it('should flex-flow row wrap on normal devices', () => {
    const { container } = renderTheme(<NavLinks links={links} />);
    expect(container.firstChild).toHaveStyle({
      'flex-flow': 'row wrap',
    });
  });

  it('should flex-flow column on mobile devices', () => {
    const { container } = renderTheme(<NavLinks links={links} />);
    expect(container.firstChild).toHaveStyleRule('flex-flow', 'column nowrap', {
      media: theme.media.lteMedium,
    });
  });

  it('should render without links', () => {
    renderTheme(<NavLinks />);
    expect(screen.queryAllByRole('link')).toHaveLength(0);
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<NavLinks links={links} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
