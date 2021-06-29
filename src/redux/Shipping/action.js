import { CREATE_SHIPPING, LOADING, ERROR } from "./types";
import API from "../../services/Api";

export const createShipping =
  ({ kind, platform, items, sizes, courier, destiny, insurance }) =>
  async (dispatch) => {
    const reference = Math.floor(Math.random() * 9999);

    dispatch({
      type: LOADING,
    });

    try {
      const params = {
        shipment: {
          kind,
          platform,
          reference: `#${reference}`,
          items,
          sizes,
          courier,
          destiny,
          insurance,
        },
      };
      const { data } = await API.createShipping(params);

      dispatch({
        type: CREATE_SHIPPING,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.message,
      });
    }
  };
