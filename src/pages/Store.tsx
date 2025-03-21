import { useState } from "react";
import Items from "../constants/data";
import ProductCard from "../components/ProductCard";

type Category = "all" | "fruit" | "vegetable";

const Store = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");

  // Filter items based on selected category
  const filteredItems =
    selectedCategory === "all"
      ? Items
      : Items.filter(item => item.category === selectedCategory);

  return (
    <div className="p-6 flex flex-col">
      <h1 className="text-6xl py-5">Store</h1>
      <div className="flex px-5 gap-10">
        <button
          className={`px-4 py-2 rounded ${
            selectedCategory === "all"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setSelectedCategory("all")}
        >
          all
        </button>
        <button
          className={`px-4 py-2 rounded ${
            selectedCategory === "fruit"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setSelectedCategory("fruit")}
        >
          fruits
        </button>
        <button
          className={`px-4 py-2 rounded ${
            selectedCategory === "vegetable"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setSelectedCategory("vegetable")}
        >
          vegetables
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center justify-center mt-6 ipad-pro-only">
        {filteredItems.map(item => (
          <div key={item.id}>
            <ProductCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;

// import { useState } from "react";
// import Items from "../constants/data";
// import ProductCard from "../components/ProductCard";
// interface Item {
//   id: number;
//   name: string;
//   category: "fruit" | "vegetable";
// }

// const Store = () => {
//   return (
//     <div className="p-6 flex flex-col ">
//       <div className="flex px-10 gap-10">
//         <button>all</button>
//         <button>fruits</button>
//         <button>vegetables</button>
//       </div>

//       <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ipad-pro-only gap-4 items-center justify-center">
//         {Items.map(item => (
//           <div>
//             <ProductCard item={item} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Store;
