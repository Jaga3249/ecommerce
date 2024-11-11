import { serviceFeatures } from "../../data";

const supportData = [];

const SupportSection = () => {
  return (
    <div className="px-28 ">
      <div className="flex justify-center items-center gap-12 py-24 ">
        {serviceFeatures.map((item, i: any) => (
          <div
            className="w-[249px] h-[161px] flex flex-col  items-center justify-between"
            key={i}
          >
            <span className="text-center w-14 h-14 bg-[#000] text-white flex justify-center items-center rounded-full border-8 border-[rgba(170,162,177,1)] ">
              {item.icon}
            </span>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-lg w-fit">{item.title}</h1>
              <p className="text-sm text-center">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SupportSection;
