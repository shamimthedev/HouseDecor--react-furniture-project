import HeroImg from "../assets/images/hero-image.png";

const Hero = () => {
  return (
    <>
      <section className="hero-section">
        <div className="max-w-7xl mx-auto py-6 sm:py-8 md:py-12">
          <div className="hero-content sm:mx-8 xl:mx-0 bg-[#F6F6F6] grid grid-cols-1 md:grid-cols-2 lg:gap-32 justify-between items-center">
            <div className="hero-details pt-7 pb-12 sm:py-8 px-6 sm:pl-8 md:pl-14 ">
              <h5 className="mb-4 font-medium text-[10px] sm:text-sm tracking-[1.35px]">
                NEW COLLECTION
              </h5>
              <h1 className="max-w-[407px] mb-6 font-bold text-[40px] md:text-6xl lg:text-7xl leading-[110%]">
                The Beauty Of Design
              </h1>
              <p className="max-w-[407px] mb-8 text-sx sm:text-base md:text-lg leading-[150%]">
                Both functional and decorative, which feels artisan-made but has
                a contemporary look.
              </p>
              <button className="px-7 py-3 font-medium bg-[#181818] text-white text-lg tracking-[4px] uppercase rounded-full">
                EXPLORE
              </button>
            </div>
            <div className="hero-image">
              <img src={HeroImg} alt="" className="w-full" />
            </div>
          </div>
        </div>
        <p className="max-w-7xl mx-auto pb-6 font-medium text-[10px] sm:text-base md:text-xl text-center border-b-2 border-[#F3F3F3]">
          Place seasonal & targeted discount benefits here
        </p>
      </section>
    </>
  );
};

export default Hero;
