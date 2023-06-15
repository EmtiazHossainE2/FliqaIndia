import Image from "next/image";

const Discover = () => {
  return (
    <div>
      <div className="discover">
        <div className="customContainer py-5 text-white">
          <div className="flex flex-col  lg:flex-row">
            <div className="basis-5/12 py-4">
              <h2 className="text-2xl font-semibold">Discover</h2>
              <h2 className="font-bold text-2xl py-[2px]">
                Graphic Design Ideas
              </h2>
              <h2 className="font-bold text-2xl">and services</h2>
              <p className="text-lg py-1 font-thin">
                From branding to marketing
              </p>
              <div className="w-full relative mb-8 mt-5">
                <input
                  type="text"
                  placeholder="Search "
                  className="focus:border-none font-[300] text-black focus:border-black px-5 py-1 rounded-3xl  pl-3"
                  style={{
                    border: "1px solid black",
                    fontFamily: "Josefin Sans",
                  }}
                />
                <button className="absolute left-[45%] xl:left-[38%] border  bg-[#221010] text-white rounded-[34px] px-5 py-[5px]">
                  Search
                </button>
              </div>
            </div>
            <div className="basis-7/12 hidden  relative lg:flex flex-col lg:flex-row gap-10 justify-center items-center">
              <Image
                src={`/images/discover/1.png`}
                alt="discover"
                width={180}
                height={100}
                className="mt-10"
              />
              <Image
                src={`/images/discover/2.png`}
                alt="discover"
                width={180}
                height={100}
                className="-mt-5"
              />
              <Image
                src={`/images/discover/3.png`}
                alt="discover"
                width={180}
                height={100}
                className="mt-10"
              />
              <Image
                src={`/images/discover/4.png`}
                alt="discover"
                width={180}
                height={100}
                className="-mt-5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discover