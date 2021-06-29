import { GET_COURIERS, LOADING, ERROR } from "./types";
import API from "../../services/Api";

export const getCouriers = () => async (dispatch) => {
  const couriers = localStorage.getItem("couriers");

  if (couriers) {
    dispatch({
      type: GET_COURIERS,
      payload: JSON.parse(couriers),
    });
    return;
  }

  dispatch({
    type: LOADING,
  });

  try {
    const { data } = await API.getCouriers();

    localStorage.setItem("couriers", JSON.stringify(data));

    dispatch({
      type: GET_COURIERS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.message,
    });
  }
};
