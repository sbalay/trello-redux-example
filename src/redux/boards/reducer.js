import PropTypes from 'prop-types';
import Immutable from 'seamless-immutable';

import { actions } from './actions';

const defaultState = {
  list: [],
  loading: true
};

/* eslint-disable complexity */
export default function reducer(state = Immutable(defaultState), action) {
  switch (action.type) {
    case actions.GET_BOARDS: {
      return state.merge({ loading: true });
    }
    case actions.GET_BOARDS_SUCCESS: {
      return state.merge({
        loading: false,
        list: action.payload.boards
      });
    }
    case actions.GET_BOARDS_FAILURE: {
      return state.merge({ loading: false, error: action.payload.error });
    }
    case actions.GET_BOARD: {
      return state.merge({ loading: true });
    }
    case actions.GET_BOARD_SUCCESS: {
      return state.merge({
        loading: false,
        detail: action.payload.board
      });
    }
    case actions.GET_BOARD_FAILURE: {
      return state.merge({ loading: false, error: action.payload.error });
    }
    default: {
      return state;
    }
  }
}
/* eslint-enable complexity */

export const propTypes = {
  loading: PropTypes.bool.isRequired,
  board: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  })
};
