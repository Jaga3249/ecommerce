import {
  ArrowDown,
  Briefcase,
  ChevronDown,
  Contact,
  Heart,
  LogOut,
  MessageCircleX,
  Search,
  ShoppingCart,
  Star,
  UserRound,
} from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const user = "";
  console.log(pathname);
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-[#000] h-12 flex items-center justify-center relative">
        <div className="absolute text-center w-full text-[#fafafa]">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <span className="ml-2">ShopNow</span>
        </div>
        <span className="text-[#fafafa] text-sm font-medium flex gap-2 items-center absolute right-16">
          English <ChevronDown size={20} />
        </span>
      </div>

      <div className="h-10 px-28 flex justify-between items-center border-b py-8 cursor-pointer">
        <h1 className="text-[24px] font-bold">Exclusive</h1>
        <ul className="flex items-center gap-7 text-[#000] cursor-pointer">
          <li className="hover:underline leading-5 text-[16px]">Home</li>
          <li className="hover:underline leading-5 text-[16px]">Contact</li>
          <li className="hover:underline leading-5 text-[16px]">About</li>
          <li
            className="hover:underline leading-5 text-[16px]"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </li>
        </ul>
        <div className={`w-96 flex items-center justify-between `}>
          <div
            className={`w-[243px] flex items-center gap-3 bg-[#f5f5f5] p-2 rounded-sm  ${
              pathname === "/login" || pathname === "/signup" ? "ml-auto" : ""
            }`}
          >
            <input
              type="text"
              className="w-full h-full bg-[#f5f5f5] outline-none border-none"
              placeholder="What are you looking for?"
            />
            <Search size={20} />
          </div>
          {pathname === "/" && (
            <div className="w-20 flex items-center justify-between">
              <Heart onClick={() => navigate("/wishlist")} />
              <ShoppingCart />
            </div>
          )}
          <span
            className="w-10 h-10 flex items-center justify-center 
          rounded-full bg-[#db4444] cursor-pointer text-white relative"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
          >
            <UserRound size={20} />
            {show && (
              <div
                className="w-56 h-52 absolute top-10 right-1 rounded-lg
            backdrop-blur-[150px] bg-[rgba(0,0,0,0.4)]
            p-5 text-white shadow-2xl border border-[rgba(255,255,255,0.1)]"
              >
                <div className="w-full h-full flex flex-col items-start justify-between space-y-2">
                  <p className="flex items-center gap-2 text-sm">
                    <UserRound size={20} />
                    Manage My Account
                  </p>
                  <p className="flex items-center gap-2 text-sm">
                    <Briefcase size={20} />
                    My Order
                  </p>
                  <p className="flex items-center gap-2 text-sm">
                    <MessageCircleX size={20} />
                    My Cancellations
                  </p>
                  <p className="flex items-center gap-2 text-sm">
                    <Star size={20} />
                    My Reviews
                  </p>
                  <p className="flex items-center gap-2 text-sm">
                    <LogOut size={20} />
                    Logout
                  </p>
                </div>
              </div>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
