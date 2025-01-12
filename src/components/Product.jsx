import { IoMdCart } from "react-icons/io";

const Product = ({src}) => {

  return (
    <div className="">
      <img src={src} alt="" className="w-full mb-4" />
      <div className="product-details flex items-center justify-between">
        <div className="product-text">
          <h4 className="font-semibold text-xs">Product Name</h4>
          <span className="text-[10px] tracking-[0.07px]">€0.00</span>
        </div>
        <div className="cart-icon bg-[#F2F2F2] text-[#A2A2A2] txt-2xl h-10 w-10 rounded-full flex items-center justify-center">
          <IoMdCart className="" />
        </div>
      </div>
    </div>
  );
};

export default Product;
