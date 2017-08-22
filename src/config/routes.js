import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';

import { history } from '../redux/store';
import BoardsList from '../app/screens/BoardsList';
import Board from '../app/screens/Board';

export const ROUTES = {
  BOARDS_LIST: () => '/',
  BOARD_DETAIL: id => `/board/${id}`
};

function AppRoutes() {
  return (
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={BoardsList} />
        <Route exact path="/board/:id" component={Board} />
      </div>
    </ConnectedRouter>
  );
}

export default AppRoutes;
