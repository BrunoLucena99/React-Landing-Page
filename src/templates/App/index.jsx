import React from 'react';
import Heading from '../../components/Heading/index.jsx';
import BaseTemplate from '../Base/index.jsx';

// temporary import to facilitate testing on react server
import mock, { childrenMock } from '../../mocks/BaseTemplate';
import './styles.js';

const Home = () => <BaseTemplate {...mock} {...childrenMock} />;

export default Home;
