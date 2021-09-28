import React from "react";
import product from "../../data/data";

const ShopReducer = (cart = [], action) => {
  switch (action.type) {
    case "ADD TO CART":
      return [...cart, product.find((item) => item.id === action.payload)];

    case "REMOVE FROM CART":
      return cart.filter((item) => item.id !== action.payload);

    case "EMPTY_CART":
      return (cart = []);

    case "INCREASE":
      return cart.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    case "DECREASE":
      return cart
        .map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity !== 0);
    default:
      return cart;
  }
};

export default ShopReducer;
