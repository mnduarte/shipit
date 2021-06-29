import { PRICE_QUOTATION, LOADING, ERROR } from "./types";
import API from "../../services/Api";

export const priceQuotation =
  ({ height, width, length, weight, originId, destinyId, typeOfDestiny }) =>
  async (dispatch) => {
    dispatch({
      type: LOADING,
    });

    try {
      const params = {
        parcel: {
          length,
          width,
          height,
          weight,
          origin_id: originId,
          destiny_id: destinyId,
          type_of_destiny: typeOfDestiny,
        },
      };
      const { data } = await API.priceQuotation(params);

      dispatch({
        type: PRICE_QUOTATION,
        payload: {
          ...data,
          lower_price: [{
            ...data.lower_price,
            key: 0,
            type_of_destiny: typeOfDestiny,
          }],
          prices: data.prices.map((price, idx) => ({
            ...price,
            key: idx,
            type_of_destiny: typeOfDestiny,
          })),
        },
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.message,
      });
    }
  };
