export const mapSectionTwoColumns = (section = {}) => ({
  component: section.__component ?? '',
  title: section.title ?? '',
  text: section.description ?? '',
  image: section.image?.url ?? '',
  hasBackground: !!section.metadata?.background,
  sectionId: section.metadata?.section_id ?? '',
});

export const mapSectionContent = (section = {}) => ({
  component: section.__component ?? '',
  title: section.title ?? '',
  html: section.content ?? '',
  hasBackground: !!section.metadata?.background,
  sectionId: section.metadata?.section_id ?? '',
});

export const mapTextGrid = (section = {}) => ({
  component: 'section.section-grid-text',
  title: section.title ?? '',
  description: section.description ?? '',
  hasBackground: !!section.metadata?.background,
  sectionId: section.metadata?.section_id ?? '',
  grid: section.text_grid ?? [],
});

export const mapImageGrid = (section = {}) => ({
  component: 'section.section-grid-image',
  title: section.title ?? '',
  description: section.description ?? '',
  hasBackground: !!section.metadata?.background,
  sectionId: section.metadata?.section_id ?? '',
  grid: section.image_grid
    ? section.image_grid.map((img) => ({
        srcImg: img.image.src ?? '',
        altText: img.image.alternativeText,
      }))
    : [],
});

const mapSections = (sections = []) =>
  sections.map((section) => {
    const sectionType = section.__component.split('.')[1];

    if (sectionType === 'section-two-columns') {
      return mapSectionTwoColumns(section);
    }

    if (sectionType === 'section-content') {
      return mapSectionContent();
    }

    if (sectionType === 'section-grid') {
      const { text_grid = [], image_grid = [] } = section;

      if (text_grid.length > 0) {
        return mapTextGrid(section);
      }
      if (image_grid.length > 0) {
        return mapImageGrid(section);
      }
    }

    return section;
  });

export default mapSections;
