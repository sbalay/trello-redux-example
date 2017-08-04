import * as AuthService from '../../services/AuthService';
import { stringArrayToObject } from '../../utils/reduxUtils';

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
