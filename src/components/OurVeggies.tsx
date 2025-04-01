import Items from "../constants/data";
import HorizontalScroll from "./HorizontalScroll";
import { FaArrowRightLong } from "react-icons/fa6";

const OurVeggies = () => {
  const vegItems = Items.filter(item => item.category === "vegetable");

  return (
    <div>
      <div className="py-5 px-6 flex flex-col mt-14">
        <div className="  p-5 w-full bg-red-300 rounded-4xl h-[200px] md:h-[400px] flex items-center justify-center veg-bg">
          <button className="bg-white rounded-4xl p-5">our veggies</button>
        </div>
        <HorizontalScroll data={vegItems} />
        <a href="/store" className="self-end">
          {" "}
          <span className=" flex self-end text-xl font-bold items-center gap-2">
            See all <FaArrowRightLong className="text-2xl" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default OurVeggies;
