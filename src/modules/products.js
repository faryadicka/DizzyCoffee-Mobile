import axios from 'axios';
import {URL_DEPLOY} from '@env';

// const URL_DEPLOY = 'https://dizzy-coffeeshop.herokuapp.com';

export const getProductsAxios = (
  category = '',
  search = '',
  sort = 'name',
  order = 'asc',
  page = 1,
  limit = 12,
) => {
  const URL = `${URL_DEPLOY}/api/products?category=${category}&name=${search}&sort=${sort}&order=${order}&page=${page}&limit=${limit}`;
  return axios.get(URL);
};

export const getFavoriteAxios = (favorite = 'favorite') => {
  const URL = `${URL_DEPLOY}/api/products/${favorite}?page=1&`;
  return axios.get(URL);
};

export const getDetailAxios = id => {
  const URL = `${URL_DEPLOY}/api/products/detail/${id}`;
  return axios.get(URL);
};
