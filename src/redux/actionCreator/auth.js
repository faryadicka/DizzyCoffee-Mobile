import {AUTHLOGIN, LOGOUT} from './actionString';

import {loginAxios} from '../../modules/auth';

export const loginAction = body => {
  return {
    type: AUTHLOGIN,
    payload: loginAxios(body),
  };
};

export const logoutAction = remove => {
  return {
    type: LOGOUT,
    payload: {
      remove,
    },
  };
};
