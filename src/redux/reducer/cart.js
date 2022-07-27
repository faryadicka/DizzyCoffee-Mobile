import {ADDTOCART, CLEARCART, SETCHECKOUT} from '../actionCreator/actionString';

const initialState = {
  name: '',
  price: 0,
  qty: 0,
  size: '',
  image: '',
  id: '',
  total: 0,
  delivery: '',
  address: '',
  phone: '',
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTOCART:
      const {name, price, size, image, id, qty, total} = action.payload;
      return {...state, name, price, size, image, id, qty, total};
    case SETCHECKOUT:
      const {address, phone, delivery} = action.payload;
      return {...state, address, phone, delivery};
    case CLEARCART:
      return {
        ...state,
        name: '',
        price: 0,
        qty: 0,
        size: '',
        id: '',
        total: 0,
        delivery: '',
      };
    default:
      return state;
  }
};

export default cartReducer;
