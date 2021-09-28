import React from "react";
import ShopReducer from "./ShopReducer";
import TotalReducer from "./TotalReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  ShopReducer,
  TotalReducer,
  //   CartReducer,
});

export default allReducers;
