import Items from "../constants/data";
import HorizontalScroll from "./HorizontalScroll";

const OurVeggies = () => {
  const vegItems = Items.filter(item => item.category === "vegetable");

  return (
    <div>
      <div className="py-5 px-6 flex flex-col mt-3">
        <div className="  p-5 w-full bg-red-300 rounded-4xl h-[200px] md:h-[400px] flex items-center justify-center veg-bg">
          <button className="bg-white rounded-4xl p-5">our veggies</button>
        </div>
        <HorizontalScroll data={vegItems} />
        <a href="/store" className="self-end">
          {" "}
          <span className="self-end text-xl font-bold">See all</span>
        </a>
      </div>
    </div>
  );
};

export default OurVeggies;
