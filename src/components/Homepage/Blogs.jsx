import { trending } from "@/constant/data";
import Image from "next/image";
import Link from "next/link";

const Blogs = () => {
  return (
    <div className="bg-[#DDF8F3]">
      <div className="customContainer py-8">
        <h2 className="text-[#4C696D] font-bold text-2xl">Our Blogs</h2>
        <p className="font-thin pb-2">Check out our Latest Blog</p>
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="lg:basis-9/12 cursor-pointer">
            <div className="flex flex-col lg:flex-row justify-between gap-5">
              <div className="relative">
                <Image
                  src={`/images/blog/1.png`}
                  alt="blog"
                  width={584}
                  height={300}
                  className=""
                />
                <div className="absolute top-0 left-1 bg-overlay text-white py-[50px] lg:py-[62px] 2xl:py-[78px] pl-8 pr-12">
                  <h3 className="text-lg font-bold">
                    Featured on: Sep 15, 2021{" "}
                  </h3>
                  <p>
                    Wedding Photography <br /> at Goa
                  </p>
                </div>
              </div>
              <div className="relative">
                <Image
                  src={`/images/blog/2.png`}
                  alt="blog"
                  width={584}
                  height={300}
                  className=""
                />
                <div className="absolute top-0 left-1 bg-overlay text-white py-[48px] lg:py-[60px] 2xl:py-[78px] pl-8 pr-12">
                  <h3 className="text-lg font-bold">
                    Featured on: Sep 15, 2021{" "}
                  </h3>
                  <p>
                    Photography: Expectations <br /> vs. Reality
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-3/12">
            <div className="flex justify-between items-center pb-2">
              <h2 className="lg:text-xs">Trending Now</h2>
              <Link href="/" className="text-xs">
                View all
              </Link>
            </div>
            <div className="space-y-2">
              {trending.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-y-5 items-start justify-start cursor-pointer"
                >
                  <div className="basis-3/12">
                    <Image
                      src={`/images/blog/${item.img}`}
                      alt="blog"
                      width={60}
                      height={50}
                    />
                  </div>
                  <div className="basis-9/12">
                    <h3 className="text-[10px] font-medium">{item.title}</h3>
                    <p className="text-[8px]">{item.des}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs