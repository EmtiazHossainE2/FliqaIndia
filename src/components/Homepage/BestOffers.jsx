import { bestOffers } from "@/constant/data";
import Image from "next/image";

const BestOffers = () => {
  return (
    <div className="py-4 relative">
      <div className="text-center">
        <h2 className="text-[#4C696D] font-bold text-2xl">Best Offers</h2>
        <p className="pb-5">Discover the best offers on our services</p>
      </div>
      <div className="bg-gradient-to-b from-[#FFFFFF] via-[#9fc5c5] to-[#ffffff]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 customContainer">
          {bestOffers.map((offer, index) => (
            <div key={index} className="relative cursor-pointer">
              <div className="flex justify-center items-center">
                <Image
                  src={`/images/offers/${offer.img}`}
                  alt="offer"
                  width={243}
                  height={175}
                />
              </div>
              {index < bestOffers.length - 1 && (
                <div
                  className="absolute top-0 left-[100%] hidden lg:block"
                  style={{
                    borderLeft: "2px solid #8F8787",
                    height: "75%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "2rem",
                    marginBottom: "2rem",
                  }}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestOffers;
