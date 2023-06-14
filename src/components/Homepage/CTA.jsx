import { CTAs } from "@/constant/data";
import Image from "next/image";

const CTA = () => {
  return (
    <div className="customContainer py-5 lg:py-8">
      <div className="text-center">
        <h2
          className="font-bold text-2xl lg:text-3xl 2xl:text-4xl"
          style={{ fontFamily: "Jura", mixBlendMode: "multiply" }}
        >
          India’s Leading Creative Platform
        </h2>
        <p
          className="font-[300] text-[#4C696D] py-3"
          style={{ fontFamily: "Josefin Sans" }}
        >
          Experience hassle free bookings. Trusted by 2500+ Customers
        </p>
        <div className="w-full relative mb-8">
          <input
            type="text"
            placeholder="Search service, blog and many more…"
            className="focus:border-none font-[300] px-5 py-1 rounded-3xl lg:w-5/12 pl-8"
            style={{ border: "1px solid black", fontFamily: "Josefin Sans" }}
          />
          <button className="absolute right-[6%] md:right-[23%] lg:right-[28%] border  bg-[#221010] text-white rounded-[34px] px-5 py-[5px]">
            Search
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {CTAs.map((cta, index) => (
          <div key={index} className="flex items-center gap-4">
            <div>
              <Image
                src={`/images/${cta.logo}`}
                width={100}
                height={90}
                alt="logo"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="font-bold text-sm">{cta.title}</h2>
              <p className="text-sm">{cta.des}</p>
            </div>
          </div>
        ))}
      </div>
      <div >
        <hr className="w-full mt-7 h-[1px] bg-black" />
      </div>
    </div>
  );
};

export default CTA;
