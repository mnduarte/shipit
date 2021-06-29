import { GET_COMMUNES, LOADING, ERROR } from "./types";
import API from "../../services/Api";

export const getCommunes = () => async (dispatch) => {
  const communes = localStorage.getItem("communes");
  if (communes) {
    dispatch({
      type: GET_COMMUNES,
      payload: JSON.parse(communes),
    });
    return;
  }

  dispatch({
    type: LOADING,
  });

  try {
    const { data } = await API.getCommunes();
    
    localStorage.setItem("communes", JSON.stringify(data));

    dispatch({
      type: GET_COMMUNES,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.message,
    });
  }
};
