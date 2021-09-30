import React, { useState, useEffect, useRef } from "react";
// import { useGlobalContext } from "../Context/ShopContext";
import CartItems from "./CartItems";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { EmptyCart } from "./Actions";

const Cart = () => {
  const dispatch = useDispatch();

  const cart = useSelector((cart) => cart.ShopReducer);

  const [input, setInput] = useState({
    name: "",
    email: "",
    tel: "",
  });
  const [error, setError] = useState(false);
  const [total, setTotal] = useState(0);

  const getTotal = () => {
    setTotal(cart.reduce((acc, item) => acc + item.quantity * item.price, 0));
  };

  useEffect(() => {
    getTotal();
  });

  const InputRef = useRef(null);

  useEffect(() => {
    InputRef.current && InputRef.current.focus();
  }, []);

  useEffect(() => {
    const alertTime = setTimeout(() => {
      setError(false);
    }, 2000);
    return () => {
      clearInterval(alertTime);
    };
  }, [error]);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const formValidation = () => {
    return input.name === "" || input.email === "" || input.tel === ""
      ? false
      : true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formValidation()) {
      setInput({
        name: "",
        email: "",
        tel: "",
      });
    } else {
      setError(true);
    }
  };

  return (
    <div
      className={`bg-gray-200 min-h-screen ${
        cart.length < 1 ? "flex justify-center items-center" : ""
      }`}
    >
      {cart.length > 0 ? (
        <div className="py-4 px-6">
          {cart.map((item) => (
            <CartItems key={item.id} {...item} />
          ))}

          <p className="mt-10">Total Amount To Be Paid {total}</p>

          <div className={"flex gap-10 my-10 justify-center"}>
            <form className="flex gap-10" onSubmit={handleSubmit}>
              <input
                className={`border-gray-400 ${
                  error ? "ring-red-500 ring-2" : "ring-blue-500"
                }  rounded-lg outline-none ring focus:border-gray-200`}
                type="text"
                placeholder="Enter Name"
                onChange={handleChange}
                name="name"
                value={input.name}
                ref={InputRef}
              />

              <input
                className="border-gray-400 rounded-lg outline-none"
                type="email"
                name="email"
                placeholder="Enter Email..."
                onChange={handleChange}
                value={input.email}
              />
              <input
                className="border-gray-400  rounded-lg outline-none focus:border-gray-800"
                type="tel"
                name="tel"
                placeholder="Enter Phone..."
                onChange={handleChange}
                value={input.tel}
              />

              <button
                type="button"
                className="bg-gray-300 py-2 px-4 text-gray-700"
              >
                Shop Now
              </button>

              <button
                onClick={() => dispatch(EmptyCart())}
                type="button"
                className="bg-gray-300 py-2 px-4 text-gray-700"
              >
                Clear Cart
              </button>

              <button
                type="submit"
                className="bg-yellow-300 py-2 px-4 text-gray-700"
              >
                Checkout
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="flex gap-10 justify-center items-center">
          <p className="text-lg">No Item in Cart</p>
          <NavLink to="/">
            <button className="p-3 bg-gray-600 rounded-lg text-white">
              Shop Now
            </button>
          </NavLink>{" "}
        </div>
      )}
    </div>
  );
};

export default Cart;
