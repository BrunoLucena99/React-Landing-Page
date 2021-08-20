import React from 'react';
import ReactDOM from 'react-dom';
import Home from './templates/App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles';
import { theme } from './styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
