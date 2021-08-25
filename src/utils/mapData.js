import MapMenu from './mapMenu';
import mapSections from './mapSections';

const mapData = (pagesData = [{}]) => {
  return pagesData.map((data) => {
    return {
      footerHtml: data.footer_text ?? '',
      menu: MapMenu(data.menu ?? {}),
      sections: mapSections(data.sections ?? []),
      slug: data.slug ?? '',
      title: data.title ?? '',
    };
  });
};

export default mapData;
