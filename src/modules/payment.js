import axios from 'axios';

import {URL_DEPLOY} from '@env';

export const paymentAxios = (body, token) => {
  const URL = `${URL_DEPLOY}/api/transactions`;
  return axios.post(URL, body, {headers: {'x-access-token': token}});
};
