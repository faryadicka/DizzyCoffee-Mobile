import axios from 'axios';

const URL_DEPLOY = 'https://dizzy-coffeeshop.herokuapp.com';
// const URL_LOCAL = 'https://dizzy-coffeeshop.herokuapp.com';

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
