import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles';
import { theme } from './styles/theme';
import Home from './templates/Home';
import PageNotFound from './templates/PageNotFound';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route path="/404" component={PageNotFound} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
      {/* <Home /> */}
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
