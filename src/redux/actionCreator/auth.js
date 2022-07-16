import {AUTHLOGIN} from './actionString';

import {loginAxios} from '../../modules/auth';

export const loginAction = body => {
  return {
    type: AUTHLOGIN,
    payload: loginAxios(body),
  };
};
