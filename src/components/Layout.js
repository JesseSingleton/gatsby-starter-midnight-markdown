import React from 'react';
import { array } from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/global';
import Theme from '../styles/theme';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    <Header />
    <main>{children}</main>
    <Footer />
  </ThemeProvider>
);

Layout.propTypes = {
  children: array
};

export default Layout;
