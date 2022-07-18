import {ADDTOCART} from '../actionCreator/actionString';

const initialState = {
  name: '',
  price: '',
  qty: 0,
  size: '',
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTOCART:
      const {name, price, size} = action.payload;
      return {...state, name, price, size};
    default:
      return state;
  }
};

export default cartReducer;
