import {combineReducers} from 'redux';

import authReducer from './auth';
import cartReducer from './cart';
import usersReducer from './users';

const reducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  users: usersReducer,
});

export default reducer;
