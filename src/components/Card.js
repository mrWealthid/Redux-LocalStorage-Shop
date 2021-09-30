import React from "react";
// import { useGlobalContext } from "../Context/ShopContext";
import { useSelector, useDispatch } from "react-redux";
import { AddToCart, removeFromCart } from "./Actions/index";

// import Product1 from "../Assets/product1.png";
// import Product2 from "../Assets/product2.png";
// import Product3 from "../Assets/product3.png";
// import Product4 from "../Assets/product4.png";
// import Product5 from "../Assets/product5.png";
// import Product6 from "../../public/Assets/";

const Card = ({ title, price, id }) => {
  // const { cart, setCart, products } = useGlobalContext();

  const cart = useSelector((cart) => cart.ShopReducer);
  const dispatch = useDispatch();

  const ConfirmCartItem = (myid) => {
    return cart.some((item) => item.id === myid);
  };

  return (
    <div className="mb-3 lg:w-10/12 transition duration-1000 mt-10 transform scale-90 rounded-lg">
      <img src={`../Assets/product${id}.png`} alt="" />
      <div className="flex justify-between my-2 px-4">
        <p>{title}</p>
        <p>${price}</p>
      </div>

      {ConfirmCartItem(id) ? (
        <button
          className="bg-red-400 focus:ring shadow-lg focus:ring-red-200 focus:ring-offset-2 text-white rounded-lg p-2 w-full"
          onClick={() => dispatch(removeFromCart(id))}
        >
          {"Remove Item"}
        </button>
      ) : (
        <button
          className={
            "bg-gray-700 text-white rounded-lg shadow-lg p-2 w-full  focus:outline-none focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50"
          }
          onClick={() => dispatch(AddToCart(id))}
        >
          {"Add Item"}
        </button>
      )}
    </div>
  );
};

export default Card;
