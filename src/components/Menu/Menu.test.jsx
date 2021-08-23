import { renderTheme } from '../../styles/RenderTheme';
import Menu from '.';
import { fireEvent, screen } from '@testing-library/react';
import links from '../../mocks/links';
import { theme } from '../../styles/theme';

const logoData = {
  text: 'Logo',
  link: '#target',
};

describe('<Menu />', () => {
  it('should render correctly', () => {
    const { container } = renderTheme(
      <Menu links={links} logoData={logoData} />,
    );
    expect.assertions(3);
    expect(screen.getByRole('heading', logoData.text)).toBeInTheDocument();
    expect(
      screen.getByRole('navigation', { name: 'Main menu' }),
    ).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should initialize hidden menu on mobile devices', () => {
    renderTheme(<Menu links={links} logoData={logoData} />);
    const button = screen.getByLabelText('Open/close menu');
    const menuContainer = button.nextSibling;

    expect(button).toHaveStyleRule('display', 'flex', {
      media: theme.media.lteMedium,
    });

    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.lteMedium,
    });

    expect(menuContainer).toHaveStyleRule('visibility', 'hidden', {
      media: theme.media.lteMedium,
    });

    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
  });

  it("should show menu on user clicks 'Open/close menu' button", () => {
    renderTheme(<Menu links={links} logoData={logoData} />);
    const button = screen.getByLabelText('Open/close menu');
    const menuContainer = button.nextSibling;
    fireEvent.click(button);

    expect(menuContainer).toHaveStyleRule('opacity', '1', {
      media: theme.media.lteMedium,
    });

    expect(menuContainer).toHaveStyleRule('visibility', 'visible', {
      media: theme.media.lteMedium,
    });

    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();
  });

  it("should hide the menu when it is open and the user clicks the 'Open / close menu' button", () => {
    renderTheme(<Menu links={links} logoData={logoData} />);
    const button = screen.getByLabelText('Open/close menu');
    const menuContainer = button.nextSibling;

    fireEvent.doubleClick(button);
    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.lteMedium,
    });

    expect(menuContainer).toHaveStyleRule('visibility', 'hidden', {
      media: theme.media.lteMedium,
    });

    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
  });

  it('should hide the menu when it is open and the user clicks in the menu area', () => {
    renderTheme(<Menu links={links} logoData={logoData} />);
    const button = screen.getByLabelText('Open/close menu');
    const menuContainer = button.nextSibling;

    fireEvent.click(menuContainer);
    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.lteMedium,
    });

    expect(menuContainer).toHaveStyleRule('visibility', 'hidden', {
      media: theme.media.lteMedium,
    });

    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
  });

  it('should not render links', () => {
    renderTheme(<Menu logoData={logoData} />);
  });
});
