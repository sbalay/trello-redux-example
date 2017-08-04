import Immutable from 'seamless-immutable';
import PropTypes from 'prop-types';

import * as AuthService from '../../services/AuthService';

import { actions } from './actions';

const defaultState = {
  currentUser: null,
  loading: AuthService.authInit()
};

/* eslint-disable complexity */
export function reducer(state = Immutable(defaultState), action) {
  switch (action.type) {
    case actions.INIT: {
      return state.merge({ loading: false, currentUser: action.payload }, { deep: true });
    }
    default: {
      return state;
    }
  }
}
/* eslint-enable complexity */

/* ------------- Auth propTypes ------------- */

export const propTypes = {
  loading: PropTypes.bool.isRequired,
  currentUser: PropTypes.shape({
    email: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  })
};
