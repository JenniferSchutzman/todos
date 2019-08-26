import React from 'react';

import { hot } from 'react-hot-loader/root';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

const App = () => {
  return (
    <>
      <Header />
      <Body/ >
      <Footer />
    </>
  );
};

export default hot(App);
