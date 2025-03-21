import React from "react";
import { Link } from "react-router-dom";

type Item = {
  id: number;
  name: string;
  category: string;
  image: string;
  price: number;
  description: string;
};

type Props = {
  item: Item;
};

// shadow-2xl shadow-gray-400 border border-gray-200

const ProductCard: React.FC<Props> = ({ item }) => {
  return (
    <Link to={`/details/${item.id}`}>
      <div
        className="flex flex-col items-start p-5  lg:w-[300px] md:w-auto md:min-w-[220px] w-[320px] h-[400px]  justify-evenly  shadow-gray-400 shadow-[0_10px_30px_rgba(0,0,0,0.2)]
    "
      >
        <img
          className="h-[200px] w-full object-cover self-center"
          src={item.image}
          alt=""
        />
        <p className="font-bold text-2xl">{item.name}</p>
        <span className="text-xl text-gray-500 ">${item.price}</span>
      </div>
    </Link>
  );
};

export default ProductCard;
