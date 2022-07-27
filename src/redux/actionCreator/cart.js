import {ADDTOCART, CLEARCART, SETCHECKOUT} from './actionString';

export const addCartAction = (name, price, size, image, id, total, qty) => {
  return {
    type: ADDTOCART,
    payload: {
      name,
      price,
      size,
      image,
      id,
      total,
      qty,
    },
  };
};

export const setCheckoutAction = (address, phone, delivery) => {
  return {
    type: SETCHECKOUT,
    payload: {
      address,
      phone,
      delivery,
    },
  };
};

export const clearCartAction = () => {
  return {
    type: CLEARCART,
  };
};
