import { successData } from "@/constant/data";
import Image from "next/image";

const Success = () => {
  return (
    <div className="bg-[#ACCBC7]">
      <div className="customContainer py-16">
        <div className="text-center">
          <h2 className="text-[#4C696D] font-bold text-2xl">Our Success</h2>
          <p className="pb-5">Journey of our success.</p>
        </div>
        <div className="grid grid-cols-2 gap-5 lg:flex lg:justify-center lg:items-center lg:gap-5">
          {successData.map((success, index) => (
            <div key={index}>
              <div className=" bg-white p-4 rounded-t-full rounded-s-full" >
                <Image
                  src={`/images/success/${success.img}`}
                  alt="success"
                  width={120}
                  height={30}
                  className=""
                />
              </div>
              <p className="pt-3 text-center text-xs">{success.des}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Success;
