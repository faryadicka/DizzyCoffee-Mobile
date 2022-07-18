import {ADDTOCART, COUNTDEC, COUNTINC} from './actionString';

export const addCartAction = (name, price, size) => {
  return {
    type: ADDTOCART,
    payload: {
      name,
      price,
      size,
    },
  };
};

export const countDecrement = () => {
  return {
    type: COUNTDEC,
  };
};

export const countIncrement = () => {
  return {
    type: COUNTINC,
  };
};
