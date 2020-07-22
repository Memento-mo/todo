import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';
import GlobalStyles from './utils/global';
import { Provider } from 'react-redux';

import store from './store/store';

const root = document.getElementById('root') as HTMLElement;

ReactDOM.render(
  <Provider store={store}>
    <App />
    <GlobalStyles />
  </Provider>,
  root
);
