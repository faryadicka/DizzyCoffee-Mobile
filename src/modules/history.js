import axios from 'axios';
import {URL_DEPLOY} from '@env';

export const getAllhistories = token => {
  const URL = `${URL_DEPLOY}/api/transactions?page=1&limit=12`;
  return axios.get(URL, {headers: {'x-access-token': token}});
};
