import MapMenu from './mapMenu';

const mock = {
  open_in_new_tab: false,
  logo_text: 'Landing Page',
  logo_link: '#home',
  menu_link: [
    {
      open_in_new_tab: false,
      link_text: 'pricing',
      url: '#pricing',
    },
    {
      open_in_new_tab: false,
      link_text: 'contact',
      url: '#contact',
    },
  ],
  logo: {
    url: 'a.svg',
  },
};

describe('MapMenu', () => {
  it('should return default values when data is an empty array', () => {
    const menu = MapMenu();
    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe('');
    expect(menu.image).toBe('');
    expect(menu.link).toBe('');
    expect(menu.links[0].newTab).toBe(false);
    expect(menu.links[0].href).toBe('');
    expect(menu.links[0].children).toBe('');
  });

  it('should map menu to match keys and values required', () => {
    const menu = MapMenu(mock);
    expect(menu.newTab).toBe(mock.open_in_new_tab);
    expect(menu.text).toBe(mock.logo_text);
    expect(menu.image).toBe(mock.logo.url);
    expect(menu.link).toBe(mock.logo_link);
    expect(menu.links[0].newTab).toBe(mock.menu_link[0].open_in_new_tab);
    expect(menu.links[0].href).toBe(mock.menu_link[0].url);
    expect(menu.links[0].children).toBe(mock.menu_link[0].link_text);
  });
});
