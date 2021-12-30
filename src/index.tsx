import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import AppAvi from './componets/AppAvi';
import store from './service/redux';

ReactDom.render(
  <Provider store={store}>
    <AppAvi />
  </Provider>,
  document.getElementById('root'),
);
