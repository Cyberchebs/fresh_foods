import React from "react";
import { useShopContext } from "../context/ShopContext";
import CartItem from "../components/CartItem";
import Items from "../constants/data";
import { CiDeliveryTruck } from "react-icons/ci";

const Checkout = () => {
  const { cartItems } = useShopContext();
  return (
    <div className="flex flex-col md:flex-row gap-5 p-2">
      <div className=" md:w-3/5">
        <h1 className="text-3xl">Cart</h1>
        {cartItems.map(item => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>

      <div className="  flex flex-col items-center md:w-2/5 justify-center border-4 rounded-2xl border-gray-300 gap-4 ">
        <span className="text-4xl">
          total: $
          {cartItems.reduce((total, cartItem) => {
            const item = Items.find(item => item.id === cartItem.id);
            return total + (item?.price || 0) * cartItem.quantity;
          }, 0)}
        </span>
        <div className="p-5 flex justify-between flex-col">
          <span className="flex items-center justify-center  gap-2 text-2xl ">
            {" "}
            free delivery
            <CiDeliveryTruck className="text-4xl" />
          </span>
          <button className="bg-blue-400 w-[150px] h-[50px] cursor-pointer">
            checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
