import { products } from "../../data";
import StarRating from "./StarRating";
import { Eye, Heart } from "lucide-react";

const SellingProduct = () => {
  return (
    <div className="px-28 my-6">
      <div className="flex flex-col gap-5">
        <h4 className="text-[#db4444] font-semibold flex items-center">
          <span className="w-5 h-10 bg-[#db4444] mr-4 inline-block rounded-[4px]"></span>
          This Month
        </h4>

        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-3xl">Best Selling Products</h1>
          <button className="py-3 px-12 bg-[#db4444] text-white rounded-md">
            View All
          </button>
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
      </div>
    </div>
  );
};
export default SellingProduct;
