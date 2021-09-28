// import React from "react";
// import ShopReducer from "./ShopReducer";
// import { useSelector } from "react-redux";

// const TotalReducer = (total = 0, action) => {
//   const cart = useSelector((cart) => cart.ShopReducer);

//   switch (action.type) {
//     case "GET_TOTAL":
//       return (total = cart.reduce(
//         (acc, item) => acc + item.quantity * item.price,
//         0
//       ));

//     default:
//       return total;
//   }
// };

// export default TotalReducer;
