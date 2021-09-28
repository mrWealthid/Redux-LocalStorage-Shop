import React from "react";
// import { useGlobalContext } from "../Context/ShopContext";
import Card from "./Card";
import products from "../data/data";

const Cards = () => {
  // const {} = useGlobalContext();

  return (
    <div className="flex gap-5 w-8/12 mx-auto flex-wrap justify-center">
      {products.map((product, index) => (
        <Card {...product} index={index} key={product.id} />
      ))}
    </div>
  );
};

export default Cards;
