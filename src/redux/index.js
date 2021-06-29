import { combineReducers } from "redux";
import { communeReducer } from "./Commune/reducer";
import { courierReducer } from "./Courier/reducer";
import { priceReducer } from "./Price/reducer";
import { shippingReducer } from "./Shipping/reducer";

export default combineReducers({
  communeReducer,
  courierReducer,
  priceReducer,
  shippingReducer,
});
