import { GET_COMMUNES, LOADING, ERROR } from "./types";

const INITIAL_STATE = {
  communes: [],
  loading: false,
  error: null,
};

export const communeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_COMMUNES:
      return {
        ...state,
        communes: action.payload,
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
