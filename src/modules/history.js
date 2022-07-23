import axios from 'axios';
import {URL_DEPLOY} from '@env';

export const getAllhistories = (token, limit) => {
  const URL = `${URL_DEPLOY}/api/transactions?page=1&limit=${limit}`;
  return axios.get(URL, {headers: {'x-access-token': token}});
};
