// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { services } from "@/constant/data";
import Image from "next/image";

const Services = () => {
  return (
    <div className=" py-10 ">
      <div className="customContainer">
        <div className=" flex justify-between items-center pb-5">
          <div>
            <h2 className="text-lg lg:text-2xl font-semibold text-[#4C696D]">
              Our Featured Services
            </h2>
            <p className="text-[#0C0C0C] test-sm pb-2">
              Discover the range of services provided by FliqaIndia
            </p>
          </div>
        </div>
        {/* Carousel  */}
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          loop={true}
          freeMode={false}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          modules={[FreeMode]}
          className="mySwiper"
        >
          {services.map((service, index) => (
            <div key={index} className="bg-white">
              <SwiperSlide className="bg-white">
                <div className="rounded-[10px] shadow-2xl gap-5 mb-[2px]">
                  <div>
                    <Image
                      src={`/images/service/${service.img}`}
                      alt={service.title}
                      width={304}
                      height={175}
                    />
                  </div>
                  <div className="text-center ">
                    <h3 className="font-semibold ">{service.title}</h3>
                    <hr className="h-[1px] bg-black my-2" />
                    <p className="text-[#4C696D] text-sm font-semibold">
                      {service.price}
                    </p>
                    <button className="bg-[#4E99A4] text-white px-7 py-1 rounded-xl my-2">
                      Know more
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Services;
