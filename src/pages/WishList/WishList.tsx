import { Eye, Heart, Trash2 } from "lucide-react";
import { products } from "../../../data";
import Layout from "../../layout/Layout";
import StarRating from "../../components/StarRating";

const WishList = () => {
  return (
    <Layout>
      <div className="px-28 py-10">
        {/* top section */}
        <div>
          <div className="flex justify-between items-center">
            <span>
              Wishlist (<span>{"0"}</span>)
            </span>
            <span className="p-3 border rounded-md">Move All To Bag</span>
          </div>
          <div className="grid grid-cols-4 my-10">
            {products.map((item, i) => (
              <div className="max-w-[270px]" key={i}>
                <div className="h-[250px] bg-[#f5f5f5] flex justify-center items-center rounded-md shadow-md overflow-hidden relative group">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="mx-auto object-contain transition-transform duration-300 hover:scale-125 cursor-pointer"
                  />
                  <button className="bg-[#000] absolute bottom-0 w-full text-white py-2 cursor-pointer">
                    Add to Cart
                  </button>
                  <button className="absolute top-3 left-3 bg-[#db4444] px-4 py-1 text-white rounded-md">
                    {item.discountPercentage}%
                  </button>
                  <span className="w-9 h-9 flex justify-center items-center rounded-full bg-[#fff] absolute top-3 right-2 cursor-pointer">
                    <Trash2 size={20} />
                  </span>
                </div>
                <div className="mt-4">
                  <p className="text-lg font-medium">{item.name}</p>
                  <p className="text-gray-700 my-1">
                    ₹{item.discountedPrice}
                    <span className="line-through text-gray-500 ml-2">
                      ₹{item.originalPrice}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* bottom section */}
        <div className="flex flex-col gap-5 my-10">
          <div className="flex justify-between items-center">
            <h4 className="text-[#db4444] font-semibold flex items-center">
              <span className="w-5 h-10 bg-[#db4444] mr-4 inline-block rounded-[4px]"></span>
              Just For You
            </h4>
            <span className="px-8 py-2 border rounded-md">View All</span>
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
                      <Eye />
                    </span>
                  </div>
                  <button className="absolute top-3 left-3 bg-[#db4444] px-4 py-1 text-white rounded-md">
                    {item.discountPercentage}%
                  </button>
                  <button className="bg-[#000] absolute bottom-0 w-full text-white py-2 cursor-pointer">
                    Add to Cart
                  </button>
                </div>
                <div className="mt-4">
                  <p className="text-lg font-medium">{item.name}</p>
                  <p className="text-gray-700 my-1">
                    ₹{item.discountedPrice}
                    <span className="line-through text-gray-500 ml-2">
                      ₹{item.originalPrice}
                    </span>
                  </p>
                  <StarRating count={5} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default WishList;
