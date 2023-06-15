import Image from "next/image";

const Photography = () => {
  return (
    <div className="photo">
      <div className="customContainer py-8 text-white">
        <div className="flex justify-evenly items-center">
          <div>
            <h2 className="text-2xl font-semibold">ULTIMATE </h2>
            <h2 className="text-2xl font-semibold">COURSE IN </h2>
            <h2 className="text-4xl font-bold font-serif">PHOTOGRAPHY</h2>
          </div>
          <div>
            <Image
              src="/images/photography/pImg.png"
              alt="photo"
              width={423}
              height={156}
              className="hidden lg:block"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Photography