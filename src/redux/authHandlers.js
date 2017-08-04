import PropTypes from 'prop-types';
import Immutable from 'seamless-immutable';

import * as AuthService from '../services/AuthService';
import { stringArrayToObject } from './utils';

/* ------------- Auth actions' name ------------- */
export const actions = stringArrayToObject(['SIGN_IN', 'SIGN_IN_SUCCESS', 'SIGN_IN_FAILURE', 'INIT']);

export const actionCreators = {
  init() {
    return async dispatch => {
      const user = await AuthService.fetchCurrentUser();
      dispatch({
        type: actions.INIT,
        payload: user
      });
    };
  }
};

/* ------------- Auth reducer ------------- */
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

export function propTypes() {
  return {
    loading: PropTypes.bool.isRequired,
    currentUser: PropTypes.shape({
      email: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    })
  };
}
