import HorizontalScroll from "./HorizontalScroll";
import Items from "../constants/data";
import { Link } from "react-router-dom";

const fruitItem = Items.filter(item => item.category === "fruit");

const OurFruits = () => {
  return (
    <div className="py-5 px-6 flex flex-col mt-3">
      <div className="w-full rounded-4xl bg-red-300 h-[200px] md:h-[400px] flex items-center justify-center fruit-bg">
        <button className="bg-white rounded-4xl p-5">our fruits</button>
      </div>
      <HorizontalScroll data={fruitItem} />
      <a href="/store" className="self-end">
        <span className="self-end text-xl font-bold">See all</span>
      </a>
    </div>
  );
};

export default OurFruits;
