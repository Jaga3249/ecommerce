import { Eye, Heart } from "lucide-react";
import StarRating from "./StarRating";
import { products } from "../../data";

const ExploreProducts = () => {
  return (
    <div className="mx-28 mt-4 flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <h4 className="text-[#db4444] font-semibold flex items-center">
          <span className="w-5 h-10 bg-[#db4444] mr-2 inline-block rounded-[4px]"></span>
          Our Products
        </h4>
        <div className="w-full flex justify-between pr-5">
          <h1 className="font-bold text-2xl">Explore Our Products</h1>
          <div className="flex items-end gap-4">
            <span className="w-8 h-8 bg-[#f5f5f5] rounded-full flex items-center justify-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 5L4 12L11 19M4 12H20"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="w-8 h-8 bg-[#f5f5f5] rounded-full flex items-center justify-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.5 12H20M20 12L13 5M20 12L13 19"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 grid-rows-1 gap-4 mt-6 overflow-x-hidden">
        {products.map((item, i) => (
          <div className="max-w-[270px]" key={i}>
            <div className="h-[250px] bg-[#f5f5f5] flex justify-center items-center rounded-md shadow-md overflow-hidden relative group">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="mx-auto object-contain transition-transform duration-300 hover:scale-125 cursor-pointer"
              />

              <div className="absolute top-3 right-2 flex flex-col gap-2">
                <span className="w-9 h-9 flex items-center justify-center bg-[#fff] text-[#000] rounded-full">
                  <Heart size={20} />
                </span>
                <span className="w-9 h-9 flex items-center justify-center bg-[#fff] text-[#000] rounded-full">
                  <Eye />
                </span>
              </div>
              <button className="bg-[#000] absolute bottom-0 w-full text-white py-2 cursor-pointer opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Add to Cart
              </button>
            </div>
            <div className="mt-4">
              <p className="text-lg font-medium">{item.name}</p>
              <p className="text-gray-700 my-1">
                ₹{item.originalPrice}
                <span className="line-through text-gray-500 ml-2">
                  ₹{item.discountedPrice}
                </span>
              </p>
              <StarRating count={5} />
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center items-center my-2">
        <button className="bg-[#db4444] text-white py-3 px-8 rounded-md">
          View All Products
        </button>
      </div>
    </div>
  );
};
export default ExploreProducts;
