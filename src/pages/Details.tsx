import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Items from "../constants/data";
import { useShopContext } from "../context/ShopContext";
import HorizontalScroll from "../components/HorizontalScroll";

type Item = {
  id: number;
  name: string;
  category: string;
  image: string;
  price: number;
  description: string;
};

const Details = () => {
  const { id } = useParams();
  const { increaseCartQuantity, getItemQuantity, decreaseCartQuantity } =
    useShopContext();

  const quantity = getItemQuantity(Number(id));

  const [details, setDetails] = useState<Item | null>(null);
  useEffect(() => {
    const findDetail = Items.find(item => item.id === Number(id));
    if (findDetail) {
      setDetails(findDetail);
    }
  }, [id]);

  const moreitems = Items.filter(item => item.category === details?.category);
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row lg:flex-row gap-5 p-7">
        <img
          className="w-[500px] h-[300px]  object-cover "
          src={details?.image}
          alt=""
        />

        <div className="px-5">
          <div className="flex flex-col justify-between gap-10">
            <h2 className="text-4xl">{details?.name}</h2>
            <p className="text-2xl">{details?.description}</p>
            <span className="text-2xl">${details?.price}</span>
          </div>

          <div className="py-5">
            {quantity === 0 ? (
              <button
                className="p-5 cursor-pointer w-full bg-blue-400 hover:bg-blue-500"
                onClick={() => increaseCartQuantity(Number(id))}
              >
                add to cart
              </button>
            ) : (
              <div className="flex flex-row items-center gap-3">
                <button
                  className=" p-5 cursor-pointer font-extrabold text-xl   bg-blue-400  hover:bg-blue-500"
                  onClick={() => increaseCartQuantity(Number(id))}
                >
                  +
                </button>
                <span className="font-bold text-xl ">{quantity}</span>
                <button
                  className=" p-5 cursor-pointer font-extrabold text-xl   bg-blue-400  hover:bg-blue-500"
                  onClick={() => decreaseCartQuantity(Number(id))}
                >
                  -
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="mt-3">
        <h2 className="text-3xl px-10 py-5">related products</h2>
        <HorizontalScroll data={moreitems} />
      </div>
    </div>
  );
};

export default Details;
