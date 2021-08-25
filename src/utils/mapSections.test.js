import {
  sectionTwoColumns as twoColumnsMock,
  sectionContent as sectionContentMock,
  textGrid as textGridMock,
  imageGrid as imageGridMock,
} from '../mocks/sections';

import strapiApiMock from '../mocks/strapi_api.json';

import mapSections, {
  mapSectionTwoColumns,
  mapSectionContent,
  mapTextGrid,
  mapImageGrid,
} from './mapSections';

describe('mapSections', () => {
  it('should map section function without data', () => {
    const data = mapSections();
    expect(data.length).toBe(0);
  });

  it('should map sections with data', () => {
    const data = mapSections(strapiApiMock[0].sections);
    expect(data.length).toBe(strapiApiMock[0].sections.length);
  });

  it('should map section with unexpected section grid data', () => {
    const fakeSection = { __component: 'section.section-grid' };
    const data = mapSections([fakeSection]);
    expect(data[0]).toStrictEqual(fakeSection);
  });

  it('should map section with unknown __component session', () => {
    const fakeSection = { __component: 'section.unknown' };
    const data = mapSections([fakeSection]);
    expect(data[0]).toStrictEqual(fakeSection);
  });
});

describe('mapSectionTwoColumns', () => {
  it('should map section two columns without data', () => {
    const data = mapSectionTwoColumns();
    expect(data.hasBackground).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.image).toBe('');
    expect(data.text).toBe('');
    expect(data.title).toBe('');
  });

  it('should map section two columns with data', () => {
    const mock = twoColumnsMock;
    const data = mapSectionTwoColumns(mock);
    expect(data.hasBackground).toBe(mock.metadata.background);
    expect(data.component).toBe(mock.__component);
    expect(data.sectionId).toBe(mock.metadata.section_id);
    expect(data.image).toBe(mock.image.url);
    expect(data.text).toBe(mock.description);
    expect(data.title).toBe(mock.title);
  });
});

describe('mapSectionContent', () => {
  it('should map section content without data', () => {
    const data = mapSectionContent();
    expect(data.hasBackground).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.html).toBe('');
    expect(data.title).toBe('');
  });

  it('should map section content with data', () => {
    const mock = sectionContentMock;
    const data = mapSectionContent(mock);
    expect(data.hasBackground).toBe(mock.metadata.background);
    expect(data.component).toBe(mock.__component);
    expect(data.sectionId).toBe(mock.metadata.section_id);
    expect(data.html).toBe(mock.content);
    expect(data.title).toBe(mock.title);
  });
});

describe('mapTextGrid', () => {
  it('should map text grid without data', () => {
    const data = mapTextGrid();
    expect(data.hasBackground).toBe(false);
    expect(data.component).toBe('section.section-grid-text');
    expect(data.sectionId).toBe('');
    expect(data.grid.length).toBe(0);
    expect(data.title).toBe('');
    expect(data.description).toBe('');
  });

  it('should map text grid with data', () => {
    const mock = textGridMock;
    const data = mapTextGrid(mock);
    expect(data.hasBackground).toBe(mock.metadata.background);
    expect(data.component).toBe('section.section-grid-text');
    expect(data.sectionId).toBe(mock.metadata.section_id);
    expect(data.grid).toStrictEqual(mock.text_grid);
    expect(data.title).toBe(mock.title);
    expect(data.description).toBe(mock.description);
  });
});

describe('mapImageGrid', () => {
  it('should map image grid without data', () => {
    const data = mapImageGrid();
    expect(data.hasBackground).toBe(false);
    expect(data.component).toBe('section.section-grid-image');
    expect(data.sectionId).toBe('');
    expect(data.grid.length).toBe(0);
    expect(data.title).toBe('');
    expect(data.description).toBe('');
  });

  it('should map image grid with data', () => {
    const mock = imageGridMock;
    const data = mapImageGrid(mock);
    const expectedGrid = mock.image_grid.map((img) => ({
      srcImg: img.image.url ?? '',
      altText: img.image.alternativeText ?? '',
    }));

    expect(data.hasBackground).toBe(mock.metadata.background);
    expect(data.component).toBe('section.section-grid-image');
    expect(data.sectionId).toBe(mock.metadata.section_id);
    expect(data.grid).toStrictEqual(expectedGrid);
    expect(data.title).toBe(mock.title);
    expect(data.description).toBe(mock.description);
  });
});
