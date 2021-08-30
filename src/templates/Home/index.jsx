import './styles.js';
import config from '../../config/index.js';

import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import BaseTemplate from '../Base';

import Loading from '../../components/Loading';
import GridTwoColumns from '../../components/GridTwoColumns';
import mapData from '../../utils/mapData';
import GridContent from '../../components/GridContent';
import GridText from '../../components/GridText';
import GridImage from '../../components/GridImage';

const Home = () => {
  const [data, setData] = useState([]);
  const history = useHistory();
  const location = useLocation();

  const loadData = useCallback(async () => {
    try {
      const slug =
        location.pathname.replace(/[^a-z0-9-_]/gi, '') || config.defaultSlug;
      const data = await fetch(`${config.url}${slug}`);
      const json = await data.json();
      const pageData = mapData(json);
      if (!pageData[0]) {
        history.push('/404');
        return;
      }
      setData(pageData[0]);
    } catch {
      history.push('/404');
    }
  }, [location, history]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  useEffect(() => {
    if (data.title) {
      document.title = data.title;
    }
  }, [data]);

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
