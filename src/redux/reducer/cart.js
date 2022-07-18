import {ADDTOCART} from '../actionCreator/actionString';

const initialState = {
  name: '',
  price: 0,
  qty: 0,
  size: '',
  image: '',
  id: '',
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTOCART:
      const {name, price, size, image, id, qty, total} = action.payload;
      return {...state, name, price, size, image, id, qty, total};
    default:
      return state;
  }
};

export default cartReducer;
