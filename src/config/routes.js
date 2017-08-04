import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';

import { history } from '../redux/store';
import DummyComponent from '../screens/DummyComponent';
import App from '../screens/App';

function AppRoutes() {
  return (
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/dummy" component={DummyComponent} />
      </div>
    </ConnectedRouter>
  );
}

export default AppRoutes;
