import {ADDTOCART, SETQUANTITY} from './actionString';

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
