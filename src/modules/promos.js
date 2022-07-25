import axios from 'axios';
import {URL_DEPLOY} from '@env';

export const createPromoAxios = (body, token) => {
  const URL = `${URL_DEPLOY}/api/promos`;
  return axios.post(URL, body, {
    headers: {
      'x-access-token': token,
      'content-type': 'multipart/form-data',
    },
  });
};

export const getPromoAxios = (page = 1, limit = 12) => {
  const URL = `${URL_DEPLOY}/api/promos?page=${page}&limit=${limit}`;
  return axios.get(URL);
};

export const getPromoByCouponAxios = coupon => {
  const URL = `${URL_DEPLOY}/api/promos?coupon=${coupon}`;
  return axios.get(URL);
};
