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
        className="flex flex-col cusor-pointer items-start p-5  lg:w-[300px]  md:min-w-[200px] md:w-[auto]   w-[300px] h-[400px]  justify-evenly  shadow-gray-400 shadow-[0_10px_30px_rgba(0,0,0,0.2)]
    "
      >
        <div className="w-full h-[200px] overflow-hidden rounded-md">
          <img
            className="h-full w-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
            src={item.image}
            alt=""
          />
        </div>
        <p className="font-bold text-2xl">{item.name}</p>
        <span className="text-xl text-gray-500 ">${item.price}</span>
      </div>
    </Link>
  );
};

export default ProductCard;
