import Clock from "../assets/images/clock-icon.svg";
import Shipping from "../assets/images/shipping-icon.svg";
import Wallet from "../assets/images/wallet-icon.svg";

const Feature = () => {
  return (
    <>
      <section className="feature-section max-w-7xl mx-auto px-9 py-10 sm:py-16 md:py-20 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-11 md:gap-[85px]">
        <div className="feature-item text-center">
          <img src={Clock} alt="" className="mb-8 mx-auto"/>
          <h3 className="mb-3 font-semibold text-[22px] tracking-[.15px]">Long-life objects</h3>
          <p className="max-w-[222px] sm:max-w-[310px] mx-auto text-lg tracking-[.25px]">
            Short text describing one of your product or service advantages. Try
            being creative.
          </p>
        </div>
        <div className="feature-item text-center">
          <img src={Shipping} alt="" className="mb-8 mx-auto"/>
          <h3 className="mb-3 font-semibold text-[22px] tracking-[.15px]">Fast Shipping</h3>
          <p className="max-w-[222px] sm:max-w-[310px] mx-auto text-lg tracking-[.25px]">
            Short text describing one of your product or service advantages. Try
            being creative.
          </p>
        </div>
        <div className="feature-item text-center">
          <img src={Wallet} alt="" className="mb-8 mx-auto"/>
          <h3 className="mb-3 font-semibold text-[22px] tracking-[.15px]">10% cashback</h3>
          <p className="max-w-[222px] sm:max-w-[310px] mx-auto text-lg tracking-[.25px]">
            Short text describing one of your product or service advantages. Try
            being creative.
          </p>
        </div>
      </section>
    </>
  );
};

export default Feature;
