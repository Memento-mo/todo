import React from 'react';
import { hot } from 'react-hot-loader';

import styled from 'styled-components';

import Header from '../components/Header';
import List from '../components/List';

const AppContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 15px;
`;

const App = () => {
  return (
    <AppContainer>
      <Header />
      <hr />
      <List />
    </AppContainer>
  );
};

export default hot(module)(App);
