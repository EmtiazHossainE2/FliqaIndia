import { awards } from "@/constant/data";
import Image from "next/image";

const Award = () => {
  return (
    <div className="bg-[#DDF8F3]">
      <div className="customContainer py-8">
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="lg:basis-1/2">
            <div className="p-8 rounded-lg bg-[#4E99A4] flex flex-col lg:flex-row gap-2">
              <Image
                src="/images/award/1.png"
                alt="award"
                width={304}
                height={175}
              />
              <Image
                src="/images/award/2.png"
                alt="award"
                width={304}
                height={175}
              />
            </div>
          </div>
          <div className="lg:basis-1/2 lg:grid grid-cols-2 gap-2 hidden ">
            {awards.map((info, index) => (
              <div key={index} className="flex justify-between items-center p-1 rounded-lg shadow-xl bg-white">
                <div>
                  <Image
                    src={`/images/award/${info.img}`}
                    alt="award"
                    width={90}
                    height={30}
                  />
                </div>
                <h3>{info.ratings}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Award;
