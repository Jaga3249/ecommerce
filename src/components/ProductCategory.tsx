import { useEffect, useState } from "react";
import { categories, Category } from "../../data";

const ProductCategory = () => {
  const [productCategory, setProductCategory] =
    useState<Category[]>(categories);
  const handleSelectCategory = (id: number) => {
    const updatedCategory = productCategory.map((category) => {
      if (category.id === id) {
        return { ...category, selected: true };
      } else {
        return { ...category, selected: false };
      }
    });
    setProductCategory(updatedCategory);
  };
  console.log(productCategory);
  return (
    <div className="px-28 my-6">
      <div className="flex flex-col gap-5">
        <h4 className="text-[#db4444] font-semibold flex items-center">
          <span className="w-5 h-10 bg-[#db4444] mr-4 inline-block rounded-[4px]"></span>
          Categories
        </h4>

        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-3xl">Browse By Category</h1>
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
        <div className="flex justify-between">
          {productCategory.map((category) => (
            <div
              key={category.id}
              className={`w-[170px] h-[145px] flex flex-col items-center justify-center gap-2 cursor-pointer border border-[rgba(0,0,0,0.3)] rounded-[4px] shadow-md hover:bg-[#db4444] hover:text-white hover:shadow-lg group ${
                category.selected && "bg-[#db4444] text-white"
              }`}
              onClick={() => handleSelectCategory(category.id)}
            >
              <span className=" group-hover:text-white">{category.icon}</span>
              <p className="text-lg group-hover:text-white">
                {category.name}
              </p>{" "}
              {/* Text changes to white on hover */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProductCategory;
