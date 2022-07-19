import axios from 'axios';
import {URL_DEPLOY} from '@env';

export const getProfileAxios = token => {
  const URL = `${URL_DEPLOY}/api/users/profile`;
  return axios.get(URL, {
    headers: {'x-access-token': token, 'Access-Control-Allow-Origin': '*'},
  });
};

export const updateProfileAxios = (body, token) => {
  const URL = `${URL_DEPLOY}/api/users/profile`;
  return axios.patch(URL, body, {
    headers: {'x-access-token': token, 'Access-Control-Allow-Origin': '*'},
  });
};
