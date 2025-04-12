import Items from "../constants/data";
import { useShopContext } from "../context/ShopContext";

type cartItemProps = {
  id: number;
  quantity: number;
};
const CartItem = ({ id, quantity }: cartItemProps) => {
  const { removeFromCart } = useShopContext();
  const item = Items.find(item => item.id === id);
  if (item == null) return null;
  return (
    <div className="flex  flex-row items-center p-5 border-b-2 border-gray-300 justify-between  ">
      <img className="w-[100px] h-[100px] object-cover " src={item.image} />
      <div>
        <div className="text-xl">
          {item.name} <span className="text-xs">x{quantity}</span>
        </div>
        <p>${item.price}</p>
      </div>

      <div className="justify-self-end flex gap-5 flex-col">
        <p>${item.price * quantity}</p>

        <button
          className="p-2 bg-red-600 rounded-2xl hover:bg-red-700 cursor-pointer"
          onClick={() => removeFromCart(id)}
        >
          remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
