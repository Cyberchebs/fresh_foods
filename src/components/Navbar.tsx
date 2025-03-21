import mylogo from "../assets/fresh-foods-high-resolution-logo-grayscale-transparent.png";
import { PiShoppingBagBold } from "react-icons/pi";
import { useShopContext } from "../context/ShopContext";

const Navbar = () => {
  const { cartQuantity } = useShopContext();

  return (
    <div className="sticky top-0 z-10">
      <nav className="w-full h-10 bg-blue-400 flex justify-between items-center p-7">
        <img src={mylogo} alt="logo" className="w-20" />
        <ul className="flex justify-between gap-6 text-white text-xl">
          <li>
            <a
              href="/"
              className=" hover:text-gray-200 transition-transform transform hover:text-2xl cursor-pointer"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/store"
              className=" hover:text-gray-200 transition-transform transform hover:text-2xl cursor-pointer"
            >
              Store
            </a>
          </li>
        </ul>

        <a href="/checkout" className="relative">
          <button
            aria-label="Shopping Cart"
            className="text-white text-2xl hover:text-gray-200 transition-transform transform hover:scale-110 cursor-pointer"
          >
            <PiShoppingBagBold className="text-3xl" />
          </button>
          {typeof cartQuantity === "number" && cartQuantity > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {cartQuantity}
            </span>
          )}
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
