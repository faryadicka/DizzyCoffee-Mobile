import {
  AUTHLOGIN,
  FULFILLED,
  PENDING,
  REJECTED,
  LOGOUT,
} from '../actionCreator/actionString';

const initialState = {
  dataLogin: null,
  isLoggedIn: false,
  err: null,
  isLoading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHLOGIN + PENDING:
      return {...state, isLoading: true, isLoggedIn: false};
    case AUTHLOGIN + FULFILLED:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        dataLogin: action.payload.data.data,
      };
    case AUTHLOGIN + REJECTED:
      return {
        ...state,
        err: action.payload,
        isLoading: false,
        isLoggedIn: false,
      };
    case LOGOUT:
      const {remove} = action.payload;
      return {...state, dataLogin: remove};
    default:
      return state;
  }
};

export default authReducer;
