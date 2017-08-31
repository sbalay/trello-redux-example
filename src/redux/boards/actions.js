import * as BoardService from '../../services/BoardService';
import { stringArrayToObject } from '../../utils/reduxUtils';

export const actions = stringArrayToObject([
  'GET_BOARDS',
  'GET_BOARDS_SUCCESS',
  'GET_BOARDS_FAILURE',
  'GET_BOARD',
  'GET_BOARD_SUCCESS',
  'GET_BOARD_FAILURE',
  'DELETE_BOARD',
  'DELETE_BOARD_SUCCESS',
  'DELETE_BOARD_FAILURE'
]);

const actionCreators = {
  getBoards() {
    return async dispatch => {
      dispatch({ type: actions.GET_BOARDS });
      try {
        const response = await BoardService.getBoards();
        if (response.ok) {
          dispatch(actionCreators.getBoardsSuccess(response.data));
        } else {
          throw new Error(response);
        }
      } catch (e) {
        dispatch(actionCreators.getBoardsFailure(e));
      }
    };
  },
  getBoardsSuccess(boards) {
    return {
      type: actions.GET_BOARDS_SUCCESS,
      payload: { boards }
    };
  },
  getBoardsFailure(error) {
    return {
      type: actions.GET_BOARDS_FAILURE,
      payload: { error }
    };
  },
  getBoard(boardId) {
    return async dispatch => {
      dispatch({ type: actions.GET_BOARD });
      try {
        const response = await BoardService.getBoard(boardId);
        if (response.ok) {
          dispatch(actionCreators.getBoardSuccess(response.data));
        } else {
          throw new Error(response);
        }
      } catch (e) {
        dispatch(actionCreators.getBoardFailure(e));
      }
    };
  },
  getBoardSuccess(board) {
    return {
      type: actions.GET_BOARD_SUCCESS,
      payload: { board }
    };
  },
  getBoardFailure(error) {
    return {
      type: actions.GET_BOARD_FAILURE,
      payload: { error }
    };
  },
  deleteBoard(boardId) {
    return async dispatch => {
      dispatch({ type: actions.DELETE_BOARD });
      try {
        const response = await BoardService.deleteBoard(boardId);
        if (response.ok) {
          dispatch(actionCreators.deleteBoardSuccess(boardId));
        } else {
          throw new Error(response);
        }
      } catch (e) {
        dispatch(actionCreators.deleteBoardFailure(e));
      }
    };
  },
  deleteBoardSuccess(boardId) {
    return {
      type: actions.DELETE_BOARD_SUCCESS,
      payload: { boardId }
    };
  },
  deleteBoardFailure(error) {
    return {
      type: actions.DELETE_BOARD_FAILURE,
      payload: { error }
    };
  }
};

export default actionCreators;
