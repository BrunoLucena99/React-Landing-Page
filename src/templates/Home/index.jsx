import './styles.js';
import React, { useCallback, useEffect, useState } from 'react';

import BaseTemplate from '../Base';
import PageNotFound from '../PageNotFound';
import Loading from '../Loading';

import GridTwoColumns from '../../components/GridTwoColumns';
import mapData from '../../utils/mapData';
import GridContent from '../../components/GridContent';
import GridText from '../../components/GridText';
import GridImage from '../../components/GridImage';

const Home = () => {
  const [data, setData] = useState([]);

  const loadData = useCallback(async () => {
    try {
      const data = await fetch('http://localhost:1337/pages?slug=landing-page');
      const json = await data.json();
      const pageData = mapData(json);
      setData(pageData[0]);
    } catch {
      setData(null);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  if (!data) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <Loading />;
  }

  const { menu, sections, footerHtml } = data;
  const { links, text, image, link } = menu;

  return (
    <BaseTemplate
      footerHtml={footerHtml}
      links={links}
      logoData={{ link, image, text }}
    >
      {sections.map((section, index) => {
        const { component } = section;
        const key = `${section.sectionId}-${index}key`;

        if (component === 'section.section-two-columns') {
          return <GridTwoColumns key={key} {...section} />;
        }

        if (component === 'section.section-content') {
          return <GridContent key={key} {...section} />;
        }

        if (component === 'section.section-grid-text') {
          return <GridText key={key} {...section} />;
        }

        if (component === 'section.section-grid-image') {
          return <GridImage key={key} {...section} />;
        }
      })}
    </BaseTemplate>
  );
};

export default Home;
