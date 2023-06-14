import Image from "next/image";

const Banner = () => {
  return (
    <div className="">
      <Image
        src="/images/cta1.svg"
        className="w-full h-full"
        width={120}
        height={534}
        alt=""
      />
    </div>
  );
}

export default Banner