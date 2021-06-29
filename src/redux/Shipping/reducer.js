import { CREATE_SHIPPING, LOADING, ERROR } from "./types";

const INITIAL_STATE = {
  lastShipping: [],
  loading: false,
  error: null,
};

export const shippingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_SHIPPING:
      return {
        ...state,
        lastShipping: action.payload,
        loading: false,
        error: null,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
