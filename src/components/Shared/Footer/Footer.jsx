import Link from "next/link";
import {
  BsFacebook,
  BsLinkedin,
  BsWhatsapp,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className="bg-[#131514] text-white">
      <div className="customContainer pt-12">
        <div className="flex flex-col lg:flex-row">
          <div className="basis-6/12">
            <h2 className="text-white text-xl">Never miss a thing.</h2>
            <div className="w-full relative my-5">
              <input
                type="text"
                placeholder="Email Address "
                className="focus:border-none font-[300] text-black focus:border-black px-5 py-1 rounded-3xl  pl-3"
                style={{
                  border: "1px solid black",
                  fontFamily: "Josefin Sans",
                }}
              />
              <button className="absolute  left-[50%] xl:left-[38%] border  bg-[#E0E0E0] text-[#4B4B4B] rounded-[34px] px-5 py-[4.4px]">
                Subscribe
              </button>
            </div>
            <h2 className="text-xl font-bold font-serif text-white">
              Be in touch
            </h2>
            <div className="flex gap-2 pt-2 text-white cursor-pointer">
              <BsFacebook />
              <BsWhatsapp />
              <BsLinkedin />
              <BsYoutube />
              <BsTwitter />
            </div>
          </div>
          <div className="basis-6/12 flex flex-col lg:flex-row">
            <div className="basis-1/2">
              <h2 className=" font-semibold text-lg pb-2 mt-5 lg:mt-0">
                Never miss a thing.
              </h2>
              <div className="grid grid-cols-2 gap-3  text-sm ">
                <Link href="/">Services</Link>
                <Link href="/">Tutorial</Link>
                <Link href="/">Blog</Link>
                <Link href="/">Career</Link>
                <Link href="/">Portfolio</Link>
                <Link href="/">Film</Link>
              </div>
            </div>
            <div className="basis-1/2  ">
              <h2 className=" font-semibold text-lg mt-5 lg:mt-0 ">
                Never miss a thing.
              </h2>
              <div className="flex flex-col space-y-1 text-sm pb-3 lg:pb-1">
                <Link href="/">Contact us</Link>
                <Link href="/">Feedback</Link>
                <Link href="/">FAQ</Link>
                <Link href="/">Terms and conditions</Link>
                <Link href="/"> Privacy Policy</Link>
                <Link href="/">Data Deletion Protocol</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom  */}
        <div className="text-center pt-5 pb-3 text-xs">
          <p>2019-{year}, FliqaIndia Pvt Ltd. -ALL RIGHT RESERVED</p>
          <p>POWERED BY FLIQAINDIA PVT. LTD.</p>
          <p>VERSION 5.1.5</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
