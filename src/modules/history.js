import axios from 'axios';
import {URL_DEPLOY} from '@env';

export const getAllhistories = (token, limit) => {
  const URL = `${URL_DEPLOY}/api/transactions?page=1&limit=${limit}`;
  return axios.get(URL, {headers: {'x-access-token': token}});
};

export const softDeleteAxios = (token, body) => {
  const URL = `${URL_DEPLOY}/api/transactions/soft-delete`;
  return axios.patch(URL, body, {headers: {'x-access-token': token}});
};
