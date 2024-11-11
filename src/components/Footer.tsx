import {
  Facebook,
  Instagram,
  Linkedin,
  SendHorizontal,
  Twitter,
  TwitterIcon,
} from "lucide-react";
import playstorelogo from "../assets/GooglePlay.png";
import applologo from "../assets/AppStore.png";
import qrcode from "../assets/Qr_Code.png";

const Footer = () => {
  return (
    <>
      <div className="bg-[#000] px-28 py-14 text-white flex gap-8  ">
        <div className="flex-1 flex flex-col">
          <h1 className="font-semibold">Exclusive</h1>
          <span className="my-3 text-[#fafafa] ">Subscribe</span>
          <span className="text-base">Get 10% off your first order</span>
          <div className="flex items-center gap-2 border-white border p-2 mt-3 rounded-md">
            <input
              type="text"
              className="w-full h-full outline-none bg-[#000]"
              placeholder="Enter Your email"
            />
            <SendHorizontal className="cursor-pointer" />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-3">
          <h1 className="font-semibold">Support</h1>
          <span className="text-[#fafafa]">Nayapali,Bhubaneswar,Odisha</span>
          <span>jaga@gmail.com</span>
          <span className="">+91 7853808105</span>
        </div>
        <div className="flex-1 flex flex-col gap-2 ">
          <h1 className="font-semibold">Account</h1>
          <span className="">My Account</span>
          <span>Login/Register</span>
          <span className="">cart</span>
          <span className="">wishlist</span>
          <span className="">shop</span>
        </div>
        <div className="flex-1 flex flex-col gap-2 ">
          <h1 className="font-semibold">Quick Link</h1>
          <span className="">Privacy Policy</span>
          <span>Terms Of Use</span>
          <span className="">FAQ</span>
          <span className="">Contact</span>
        </div>
        <div className="flex-1 flex flex-col gap-2 ">
          <h1 className="font-semibold">Download App</h1>
          <div className="flex flex-col gap-3">
            <span className="text-xs">Save $3 with App New User Only</span>
            <div className="flex gap-4">
              <img src={qrcode} alt="qr code" className="h-full w-1/2" />
              <div className="flex flex-col w-1/2">
                <img
                  src={playstorelogo}
                  alt="playstore logo"
                  className="h-1/2"
                />
                <img src={applologo} alt="app store logo" className="h-1/2" />
              </div>
            </div>
            <div className="flex justify-between cursor-pointer ">
              <Facebook className="hover:text-gray-500" />
              <TwitterIcon className="hover:text-gray-500" />
              <Instagram className="hover:text-gray-500" />
              <Linkedin className="hover:text-gray-500" />
            </div>
          </div>
        </div>
      </div>
      <p className=" bg-[#000] text-center text-gray-500 py-2">
        @Copyright Rimel 2022. All right reserved
      </p>
    </>
  );
};
export default Footer;
