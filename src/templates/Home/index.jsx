import React, { useCallback, useEffect, useState } from 'react';
import BaseTemplate from '../Base/index.jsx';

// temporary import to facilitate testing on react server
import mock, { childrenMock } from '../../mocks/BaseTemplate';

import mapData from '../../utils/mapData';
import './styles.js';

const Home = () => {
  const [data, setData] = useState([]);

  const loadData = useCallback(async () => {
    try {
      const data = await fetch('http://localhost:1337/pages?slug=landing-page');
      const json = await data.json();
      const pageData = mapData(json);
      setData(pageData[0]);
    } catch {
      console.log('Erro');
      setData(null);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  if (!data) {
    return <h1>Página não encontrada</h1>;
  }

  if (data && !data.slug) {
    return <h1>Carregando</h1>;
  }

  return <BaseTemplate {...mock} {...childrenMock} />;
};

export default Home;
