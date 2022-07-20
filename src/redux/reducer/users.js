import {
  USERDATA,
  FULFILLED,
  PENDING,
  REJECTED,
} from '../actionCreator/actionString';

const initialState = {
  dataUser: null,
  err: null,
  isLoading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERDATA + PENDING:
      return {...state, isLoading: true};
    case USERDATA + FULFILLED:
      return {
        ...state,
        isLoading: false,
        dataUser: action.payload.data.data,
      };
    case USERDATA + REJECTED:
      return {
        ...state,
        err: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
