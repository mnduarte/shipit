import { GET_COURIERS, LOADING, ERROR } from "./types";

const INITIAL_STATE = {
  couriers: [],
  couriersMapping: [],
  loading: false,
  error: null,
};

export const courierReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_COURIERS:
      return {
        ...state,
        couriers: action.payload,
        couriersMapping: Object.assign(
          {},
          ...action.payload.map((e) => ({ [e.name.toLowerCase()]: { ...e } }))
        ),
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
