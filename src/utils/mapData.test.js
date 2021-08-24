import mapData from './mapData';
// import mock from '../mocks/strapi_api.json';

const mock = {
  footer_text: '<p>Hey</p>',
  slug: 'slug',
  title: 'title',
  sections: [],
  menu: {},
};

describe('mapData', () => {
  it('should map data even if there is no data', () => {
    const pageData = mapData()[0];
    expect(pageData.footerHtml).toBe('');
    expect(pageData.slug).toBe('');
    expect(pageData.title).toBe('');
  });

  it('should map data if there are data', () => {
    const pageData = mapData([mock])[0];
    expect(pageData.footerHtml).toBe(mock.footer_text);
    expect(pageData.slug).toBe(mock.slug);
    expect(pageData.title).toBe(mock.title);
  });
});
