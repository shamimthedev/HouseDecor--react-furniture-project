import Vase from "../assets/images/vase.png";
import Plate from "../assets/images/plates.png";
import Plate2 from "../assets/images/plates-2.png";
import Chair from "../assets/images/chair.png";
import BrandLogo1 from "../assets/images/brand-logo-1.png";
import BrandLogo2 from "../assets/images/brand-logo-2.png";
import BrandLogo3 from "../assets/images/brand-logo-3.png";
import BrandLogo4 from "../assets/images/brand-logo-4.png";
import BrandLogo5 from "../assets/images/brand-logo-5.png";
import BrandLogo6 from "../assets/images/brand-logo-6.png";

const NewCollection = () => {

  return (
    <>
      <section className="new-collection-section max-w-7xl mx-auto pt-12 sm:gap-5 md:flex md:gap-4">
        <div className="bg-[#E1E4C2] md:w-1/3 grid grid-cols-2 sm:mb-5 md:mb-0 md:grid-cols-1 pl-6 pt-8 md:text-center">
          <div className="item-details">
            <h5 className="mb-4 md:mb-12 font-medium text-[10px] sm:text-sm tracking-[1.35px]">
              NEW COLLECTION
            </h5>
            <h3 className="max-w-[152px] md:max-w-[222px] md:mx-auto mb-6 font-bold text-2xl sm:text-4xl md:text-[40px] leading-[110%]">
              Decor & Wellness
            </h3>

            <button className="px-7 py-3 font-medium bg-[#181818] text-white text-xs tracking-[4px] uppercase rounded-full">
              Show More
            </button>
          </div>
          <div className="item-img">
            <img src={Vase} alt="Vase" className="w-full h-full" />
          </div>
        </div>
        <div className="bg-[#E1E4C2] md:w-1/3 grid grid-cols-2 sm:mb-5 md:mb-0 md:grid-cols-1 pl-6 pt-8 md:text-center">
          <div className="item-details">
            <h3 className="max-w-[152px] md:max-w-[222px] md:pt-16 md:mx-auto mb-6 font-bold text-2xl sm:text-4xl md:text-[40px] leading-[110%]">
              Kitchen & Dinhing
            </h3>

            <button className="px-7 py-3 font-medium bg-[#181818] text-white text-xs tracking-[4px] uppercase rounded-full">
              Show More
            </button>
          </div>
          <div className="item-img">
            <img
              src={Plate}
              alt="PLate"
              className="w-full h-full hidden md:block"
            />
            <img src={Plate2} alt="PLate" className="w-full h-full md:hidden" />
          </div>
        </div>
        <div className="bg-[#E1E4C2] md:w-1/3 grid grid-cols-2 sm:mb-5 md:mb-0 md:grid-cols-1 pl-6 pt-8 md:text-center">
          <div className="item-details">
            <h3 className="max-w-[152px] md:max-w-[222px] md:pt-16 md:mx-auto mb-6 font-bold text-2xl sm:text-4xl md:text-[40px] leading-[110%]">
              Shop Furniture
            </h3>

            <button className="px-7 py-3 font-medium bg-[#181818] text-white text-xs tracking-[4px] uppercase rounded-full">
              Show More
            </button>
          </div>
          <div className="item-img">
            <img src={Chair} alt="Chair" className="w-full h-full" />
          </div>
        </div>
      </section>
      <section className="brand-logo-part max-w-7xl mx-auto py-20 px-6 flex justify-between items-center">
        <img src={BrandLogo1} alt="" className="w-14 sm:w-28" />
        <img src={BrandLogo2} alt="" className="w-14 sm:w-28" />
        <img src={BrandLogo3} alt="" className="w-14 sm:w-28" />
        <img src={BrandLogo4} alt="" className="w-14 sm:w-28" />
        <img src={BrandLogo5} alt="" className="hidden md:block" />
        <img src={BrandLogo6} alt="" className="hidden md:block" />
      </section>
    </>
  );
};

export default NewCollection;
