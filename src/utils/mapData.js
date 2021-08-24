const mapData = (pagesData = [{}]) => {
  return pagesData.map((data) => {
    return {
      footerHtml: data.footer_text ?? '',
      menu: data.menu ?? {},
      sections: data.sections ?? [],
      slug: data.slug ?? '',
      title: data.title ?? '',
    };
  });
};

export default mapData;
