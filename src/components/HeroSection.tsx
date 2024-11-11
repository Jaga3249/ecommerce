import { ChevronRight, MoveRight } from "lucide-react";
import applologo from "../assets/applologo.png";
import apploPhone from "../assets/applophone.png";
const HeroSection = () => {
  return (
    <div className="px-28 flex">
      <div className=" pt-8 border-r ">
        <div className="w-[200px] h-[344px] cursor-pointer ">
          <ul className=" w-full h-full flex flex-col justify-between text-[#000] text-sm">
            <li className="flex justify-between items-center w-full ">
              Woman's Fashion <ChevronRight size={20} />
            </li>
            <li className="flex justify-between items-center">
              Men's Fashion <ChevronRight size={20} />
            </li>
            <li>Electronics</li>
            <li>Home & Lifestyle</li>
            <li>Medicine</li>
            <li>Sports & Outdoor</li>
            <li>Baby's & Toys</li>
            <li>Groceries & Pets</li>
            <li>Health & Beauty</li>
          </ul>
        </div>
      </div>
      <div className="w-full pl-6 py-6 flex justify-center items-center ">
        <div className="bg-[#000] w-full h-full flex">
          <div className="flex flex-col justify-center ml-20 gap-2 w-[40%]">
            <p className="flex gap-3 items-center">
              <img src={applologo} alt="appolo logo" />
              <span className="text-white">iPhone 14 Series</span>
            </p>
            <h1 className="text-white text-[40px] font-bold max-w-[294px]">
              Up to 10% <br />
              off Voucher
            </h1>
            <span className="text-white flex gap-2 items-center hover:underline cursor-pointer">
              Shop Now <MoveRight size={20} className="mt-1" />
            </span>
          </div>
          <div className="w-[60%] -ml-20">
            <img
              src={apploPhone}
              alt="appolo phone"
              className="w-full h-full object-fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
