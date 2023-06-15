import { Associate } from "@/constant/data";
import Image from "next/image";
import Link from "next/link";
import {AiOutlineStar} from 'react-icons/ai'

const TrustPeople = () => {
  return (
    <div className=" py-10 bg-gradient-to-b from-[#b3eee4] to-[#cbe3df]">
      <div className="customContainer">
        <div className=" flex justify-between items-center pb-5">
          <div>
            <h2 className="text-lg lg:text-2xl font-semibold text-[#4C696D]">
              Find Trusted Associate
            </h2>
            <p className="text-[#0C0C0C] test-sm pb-2">
              Find the best Fliqa Associate for your special day.
            </p>
          </div>
          <Link href="/" className="text-[#4C696D] text-sm">
            See More 
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-5">
          {Associate.map((el, index) => (
            <div key={index} className="bg-[#2C2C2C] rounded-3xl ">
              <div className="flex justify-center items-center text-center">
                <Image
                  src={`/images/associate/${el.img}`}
                  alt={el.name}
                  width={304}
                  height={175}
                />
              </div>
              <div className="flex px-4 py-2 text-white justify-between items-center">
                <div>
                  <h3 className="font-medium text-xs lg:text-sm">{el.name}</h3>
                  <p className="text-[10px] lg:text-xs">{el.location}</p>
                </div>
                <div>
                  {el.ratings !== "" ? (
                    <p className="flex justify-center text-xs lg:text-sm items-center">
                      {el.ratings} <AiOutlineStar />
                    </p>
                  ) : (
                    <Image
                      src={`/images/associate/v.svg`}
                      alt={el.name}
                      width={98}
                      height={42}
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustPeople;
