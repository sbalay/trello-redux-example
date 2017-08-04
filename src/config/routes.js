import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';

import { history } from '../redux/store';
import Dummy from '../app/screens/Dummy';
import App from '../app/screens/App';

function AppRoutes() {
  return (
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/dummy" component={Dummy} />
      </div>
    </ConnectedRouter>
  );
}

export default AppRoutes;
