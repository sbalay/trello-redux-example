import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './config/perf';

import AppRoutes from './config/routes';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>,
  document.getElementById('root')
);
