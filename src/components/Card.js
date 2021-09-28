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

  //   useEffect(() => {
  //     ConfirmCart();
  //   }, []);

  // const AddToCart = (id) => {
  //   setCart([...cart, products.find((product) => product.id === id)]);
  // };

  // const RemoveFromCart = (id) => {
  //   setCart(cart.filter((product) => product.id !== id));
  // };

  return (
    <div className="w-1/4 mb-3">
      <img src={`../Assets/product${id}.png`} alt="" />
      <div className="flex justify-between my-2">
        <p>{title}</p>
        <p>${price}</p>
      </div>

      {ConfirmCartItem(id) ? (
        <button
          className={"bg-gray-400 text-white p-2 w-full"}
          onClick={() => dispatch(removeFromCart(id))}
        >
          {"Remove From Cart"}
        </button>
      ) : (
        <button
          className={"bg-gray-700 text-white p-2 w-full"}
          onClick={() => dispatch(AddToCart(id))}
        >
          {"Add to Cart Cart"}
        </button>
      )}
    </div>
  );
};

export default Card;
