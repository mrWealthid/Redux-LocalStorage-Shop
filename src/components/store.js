import allReducers from "./Reducers";
import { createStore } from "redux";

function saveToLocalStorage(cart) {
  try {
    const saveToStorage = JSON.stringify(cart);
    localStorage.setItem("MyCart", saveToStorage);
  } catch (e) {
    console.warn(e);
  }
}

function loadFromLocalStorage() {
  try {
    const getFromStorage = localStorage.getItem("MyCart");
    if (getFromStorage.length < 0) return [];
    return JSON.parse(getFromStorage);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

const store = createStore(allReducers, loadFromLocalStorage());
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
