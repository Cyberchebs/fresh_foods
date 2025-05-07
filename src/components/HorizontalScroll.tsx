import React from "react";
import ProductCard from "./ProductCard";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useRef } from "react";

type Item = {
  id: number;
  name: string;
  category: string;
  image: string;
  price: number;
  description: string;
};

type Props = {
  data: Item[];
};

const HorizontalScroll: React.FC<Props> = ({ data }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 500; // Adjust scroll step
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full py-3  ">
      {/* Scroll Left Button (Hidden on Mobile) */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-10 hidden md:flex bg-blue-500 text-white p-4 rounded-full shadow-lg cursor-pointer"
      >
        <FaArrowLeftLong />
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex flex-nowrap  overflow-x-scroll w-full  gap-x-6 p-4 hide-scrollbar mb-5   scroll-smooth"
      >
        {data?.slice(0, 6).map(item => (
          <div key={item.id}>
            <ProductCard item={item} />
          </div>
        ))}
      </div>

      {/* Scroll Right Button (Hidden on Mobile) */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-10 hidden md:flex bg-blue-500 text-white p-4 rounded-full shadow-lg cursor-pointer"
      >
        <FaArrowRightLong />
      </button>
    </div>
  );
};
export default HorizontalScroll;
