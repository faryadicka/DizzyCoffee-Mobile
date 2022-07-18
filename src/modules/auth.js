import axios from 'axios';
import {URL_DEPLOY} from '@env';

export const loginAxios = body => {
  const URL = `${URL_DEPLOY}/api/auth/login`;
  return axios.post(URL, body);
};

export const registerAxios = body => {
  const URL = `${URL_DEPLOY}/api/auth/register`;
  return axios.post(URL, body);
};

export const forgotAxios = body => {
  const URL = `${URL_DEPLOY}/api/auth/forgot`;
  return axios.post(URL, body);
};
