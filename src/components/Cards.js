import React from "react";
// import { useGlobalContext } from "../Context/ShopContext";
import Card from "./Card";
import products from "../data/data";

const Cards = () => {
  // const {} = useGlobalContext();

  return (
    <div className="bg-gray-300">
      <h1 className="text-lg md:text-2xl text-center pt-5">GADGETS</h1>
      <div className="grid grid-col-auto sm:grid-cols-2 md:grid-cols-3 w-10/12 mx-auto justify-center">
        {products.map((product, index) => (
          <Card {...product} index={index} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
