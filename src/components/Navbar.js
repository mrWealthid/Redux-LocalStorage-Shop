import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes, FaShoppingBag } from "react-icons/fa";
// import { useGlobalContext } from "../Context/ShopContext";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  // const { cart } = useGlobalContext();
  const [isOpen, setIsOpen] = useState(false);

  const cart = useSelector((cart) => cart.ShopReducer);

  // const linksContainerRef = useRef(null);
  // const linksRef = useRef(null);

  //   useEffect(() => {
  //     const linksHeight = linksRef.current.getBoundingClientRect().height;
  //     console.log(linksHeight);
  //     if (isOpen) linksContainerRef.current.style.height = `${linksHeight}px`;
  //   }, [isOpen]);
  return (
    <div
      className="bg-gray-300 text-gray-700 transition duration-1000 p-4"
      // ref={linksContainerRef}
    >
      <header className="flex justify-between ">
        <div>Navbar</div>

        <div className="md:hidden">
          {isOpen ? (
            <FaTimes onClick={() => setIsOpen(!isOpen)} />
          ) : (
            <FaBars onClick={() => setIsOpen(!isOpen)} />
          )}
        </div>

        <nav className="hidden md:flex gap-5 items-center ">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink
            className="bg-white gap-2 rounded-lg p-2 text-black"
            to="/cart"
          >
            <span className="flex item-center gap-5 ">
              <FaShoppingBag />
              {cart.length}
            </span>
          </NavLink>
        </nav>
      </header>

      <div
        className={`${
          isOpen ? "block md:hidden" : "hidden"
        }  flex flex-col  mt-4 transform space-y-4`}
      >
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Login</a>
        <a href="/">Login</a>
      </div>
    </div>
  );
};

export default Navbar;