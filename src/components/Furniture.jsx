import FurnitureImg from "../assets/images/furniture-image.png";

const Furniture = () => {
  return (
    <>
      <section className="furniture-section max-w-7xl mx-auto pb-10 sm:pb-16 md:pb-20">
        <h2 className="mb-6 md:mb-12 font-semibold text-2xl text-center">
          Furniture designed for you
        </h2>
        <img src={FurnitureImg} alt="" className="w-full sm:px-6" />
        <div className="furniture-details px-[18px] pt-3">
          <h3 className="mb-2 font-semibold">Short subtitle for a section</h3>
          <div className="md:flex justify-between items-center">
            <p className="max-w-[266px] sm:max-w-[399px] mb-6 text-xs tracking-[.25px]">
              A small description of what you can offer your customers or why
              they should choose your service
            </p>
            <button className="px-7 py-3 font-medium bg-[#181818] text-white text-xs tracking-[4px] uppercase rounded-full">
              FIND MORE
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Furniture;
