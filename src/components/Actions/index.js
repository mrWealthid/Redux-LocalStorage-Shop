const AddToCart = (id) => {
  return {
    type: "ADD TO CART",
    payload: id,
  };
};

const removeFromCart = (id) => {
  return {
    type: "REMOVE FROM CART",
    payload: id,
  };
};

const IncreaseQuantity = (id) => {
  return {
    type: "INCREASE",
    payload: id,
  };
};

const DecreaseQuantity = (id) => {
  return {
    type: "DECREASE",
    payload: id,
  };
};

const EmptyCart = () => {
  return {
    type: "EMPTY_CART",
  };
};

const GetTotal = () => {
  return {
    type: "GET_TOTAL",
  };
};

export {
  AddToCart,
  removeFromCart,
  IncreaseQuantity,
  DecreaseQuantity,
  EmptyCart,
  GetTotal,
};
