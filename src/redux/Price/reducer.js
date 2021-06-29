import { PRICE_QUOTATION, LOADING, ERROR } from "./types";

const INITIAL_STATE = {
  algorithm: null,
  algorithmDays: null,
  courierForClient: null,
  lowerPrice: [],
  prices: [],
  loading: false,
  error: null,
};

export const priceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRICE_QUOTATION:
      return {
        ...state,
        algorithm: action.payload.algorithm,
        algorithmDays: action.payload.algorithm_days,
        courierForClient: action.payload.courier_for_client,
        lowerPrice: action.payload.lower_price,
        prices: action.payload.prices,
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
