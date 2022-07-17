import axios from 'axios';

const URL_DEPLOY = 'https://dizzy-coffeeshop.herokuapp.com';

export const getProductsAxios = (
  category = '',
  search = '',
  sort = 'name',
  order = 'asc',
  page = 1,
) => {
  const URL = `${URL_DEPLOY}/api/products?category=${category}&name=${search}&sort=${sort}&order=${order}&page=${page}&limit=12`;
  return axios.get(URL);
};
