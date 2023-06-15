import { realWedding } from "@/constant/data";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

const RealWedding = () => {
  return (
    <div className="customContainer py-8">
      <h2 className="text-[#4C696D] font-bold text-2xl">Real Wedding</h2>
      <p className="pb-3">List your wedding and browse portfolio</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {realWedding.map((el, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg shadow-md ${
              index === 0
                ? "bg-[#DDF8F3]"
                : index === 1
                ? "bg-[#FBDADA]"
                : index === 2
                ? "bg-[#FFF9D9]"
                : "bg-[#DDE4FF]"
            }`}
          >
            <div>
              <Image
                src={`/images/real-wedding/${el.img1}`}
                alt="wedding"
                width={330}
                height={215}
              />
            </div>
            <div className="flex">
              <Image
                src={`/images/real-wedding/${el.img2}`}
                alt="wedding"
                width={330}
                height={215}
              />
              <Image
                src={`/images/real-wedding/${el.img3}`}
                alt="wedding"
                width={330}
                height={215}
              />
              <Image
                src={`/images/real-wedding/${el.img4}`}
                alt="wedding"
                width={330}
                height={215}
              />
            </div>
            <div className="p-2">
              <h2 className="font-bold">{el.title}</h2>
              <p>{el.location}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center flex justify-center items-center mt-5">
        <button className="px-5 py-2 rounded-lg bg-[#DDF9FF] flex justify-center items-center gap-1 ">
          View more weddings
          <BsArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default RealWedding;
