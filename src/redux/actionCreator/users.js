import {USERDATA} from './actionString';
import {getProfileAxios} from '../../modules/user';

export const getUserDataAction = token => {
  return {
    type: USERDATA,
    payload: getProfileAxios(token),
  };
};
