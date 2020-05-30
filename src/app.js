import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRoutes from '<components>/BaseRoutes';
import './assets/styles/main.scss';

import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import theme from '../theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Router>
        <BaseRoutes />
      </Router>
    </ThemeProvider>
  );
};

export default App;
