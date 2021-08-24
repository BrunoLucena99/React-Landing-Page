import React from 'react';
import Heading from '../../components/Heading/index.jsx';
import BaseTemplate from '../Base/index.jsx';

// temporary import to facilitate testing on react server
import { mockBase } from '../Base/stories.jsx';
import './styles.js';
import { Wrapper } from './styles.js';

const Home = () => <BaseTemplate {...mockBase} />;

export default Home;
