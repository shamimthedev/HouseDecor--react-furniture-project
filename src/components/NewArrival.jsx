const NewArrival = () => {
  return (
    <>
      <section className="bg-newArrivalBackground bg-cover bg-no-repeat bg-center">
        <div className="item-details pl-8 pt-8 pb-11 sm:pt-12 sm:pb-[87px] sm:pl-[83px] md:pl-[239px] md:pt-24 md:pb-[216px] text-white">
          <h5 className="mb-4 md:mb-12 font-medium text-[10px] sm:text-sm tracking-[1.35px]">
            NEW ARRIVAL
          </h5>
          <h2 className="max-w-[190px] sm:max-w-[339px] mb-6 font-semibold text-2xl sm:text-4xl md:text-[40px] leading-[110%]">
            Everything you need for your living room
          </h2>

          <button className="px-7 py-3 font-medium bg-[#181818] text-white text-xs tracking-[4px] uppercase rounded-full">
            PURCHASE
          </button>
        </div>
      </section>
    </>
  );
};

export default NewArrival;
