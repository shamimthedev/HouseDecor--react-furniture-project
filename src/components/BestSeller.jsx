import Product from "./Product";
import Product1 from "../assets/images/product-1.png";
import Product2 from "../assets/images/product-2.png";
import Product3 from "../assets/images/product-3.png";
import Product4 from "../assets/images/product-4.png";
import Product5 from "../assets/images/product-5.png";
import Product6 from "../assets/images/product-6.png";
import Product7 from "../assets/images/product-7.png";
import Product8 from "../assets/images/product-8.png";

const BestSeller = () => {
  return (
    <>
      <section className="best-sellers-section max-w-7xl mx-auto pb-10 sm:pb-16 md:pb-20 border-b-2 border-[#F3F3F3]">
        <h2 className="mb-6 md:mb-12 font-semibold text-2xl text-center">
          Shop best sellers
        </h2>
        <div className="products-gallery px-4 sm:6 md:14 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          <Product src={Product1}/>
          <Product src={Product2}/>
          <Product src={Product3}/>
          <Product src={Product4}/>
          <Product src={Product5}/>
          <Product src={Product6}/>
          <Product src={Product7}/>
          <Product src={Product8}/>
        </div>
      </section>


      {/* slider__test */}
      <div>

        
      </div>
    </>
  );
};

export default BestSeller;
