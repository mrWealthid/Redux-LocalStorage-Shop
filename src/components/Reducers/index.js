import ShopReducer from "./ShopReducer";
import TotalReducer from "./TotalReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  ShopReducer,
  TotalReducer,
});

export default allReducers;
