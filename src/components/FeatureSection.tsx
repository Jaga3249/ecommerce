import playstation from "../assets/PlayStation.png";
import women from "../assets/women.png";
import soundlogo from "../assets/sound-echo.png";
import perfume from "../assets/perfume.png";

const FeatureSection = () => {
  return (
    <div className="px-28">
      <h4 className="text-[#db4444] font-semibold flex items-center">
        <span className="w-5 h-10 bg-[#db4444] mr-2 inline-block rounded-[4px]"></span>
        Our Featured
      </h4>
      <h1 className="font-bold text-2xl mt-4 mb-10">New Arrival</h1>
      <div className="w-full flex gap-3 ">
        <div className="w-[570px] h-[600px] bg-[#000] relative">
          <img
            src={playstation}
            alt="playstation"
            className="object-fill absolute bottom-0 left-6"
          />
          <div className="flex flex-col gap-2 absolute bottom-5 left-6 ">
            <h1 className="text-white text-2xl">PlayStation 5</h1>
            <p className="text-[rgba(221,213,213,1)] text-sm ">
              Black and White version of the PS5 <br /> coming out on sale.
            </p>
            <span className="text-white border-b border-[#fafafa] w-fit">
              Shop Now
            </span>
          </div>
        </div>
        <div className="w-[570px] h-[600px] flex flex-col gap-4">
          <div className="bg-[#000] h-1/2 relative">
            <img
              src={women}
              alt="women"
              className="absolute right-0 top-0 bottom-0 h-full "
            />
            <div className="flex flex-col gap-2 absolute bottom-5 left-6 ">
              <h1 className="text-white text-2xl">Women's Collections</h1>
              <p className="text-[rgba(221,213,213,1)] text-sm ">
                Featured woman collections that <br />
                give you another vibe.
              </p>
              <span className="text-[#fff] border-b border-[#fafafa] w-fit ">
                Shop Now
              </span>
            </div>
          </div>
          <div className="h-1/2 flex gap-4 ">
            <div className="bg-[#000] w-1/2 flex items-center justify-center relative">
              <img src={soundlogo} alt="soundlogo" className="" />
              <div className="flex flex-col gap-1 absolute bottom-5 left-6 ">
                <h1 className="text-white text-2xl">Speakers</h1>
                <p className="text-[rgba(221,213,213,1)] text-sm ">
                  Amazon wireless speakers
                </p>
                <span className="text-[#fff] border-b border-[#fafafa] w-fit ">
                  Shop Now
                </span>
              </div>
            </div>
            <div className="bg-[#000] w-1/2 flex items-center justify-center relative">
              <img src={perfume} alt="perfume" className="" />
              <div className="flex flex-col gap-1 absolute bottom-5 left-6 ">
                <h1 className="text-white text-2xl">Perfume</h1>
                <p className="text-[rgba(221,213,213,1)] text-xs ">
                  GUCCI INTENSE OUD EDP{" "}
                </p>
                <span className="text-[#fff] border-b border-[#fafafa] w-fit ">
                  Shop Now
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeatureSection;
