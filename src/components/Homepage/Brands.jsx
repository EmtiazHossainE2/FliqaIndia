
const Brands = () => {
  return (
    <div className="customContainer py-8">
      <div className="lg:flex lg:flex-row justify-center gap-16 font-[Homenaje] text-2xl ">
        <h2 className="pb-5 lg:pb-0 font-bold lg:font-normal">Popular: </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          <h2 className="text-[#4C696D]">Website Design</h2>
          <h2 className="text-[#4C696D]">Logo Design</h2>
          <h2 className="text-[#4C696D]">Brochure</h2>
          <h2 className="text-[#4C696D]">Label Design</h2>
        </div>
      </div>
    </div>
  );
}

export default Brands