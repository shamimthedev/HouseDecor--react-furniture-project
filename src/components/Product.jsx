import { IoMdCart } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

const Product = ({ id, src, title, price }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id,
        title,
        price,
        src,
        quantity: 1, // Default quantity when adding the item
      })
    );
  };

  return (
    <div className="">
      <img src={src} alt="" className="w-full mb-4" />
      <div className="product-details flex items-center justify-between">
        <div className="product-text">
          <h4 className="font-semibold text-xs">{title}</h4>
          <span className="text-[10px] tracking-[0.07px]">${price}</span>
        </div>

        <button onClick={handleAddToCart}>
          <div className="cart-icon bg-[#F2F2F2] text-[#A2A2A2] txt-2xl h-10 w-10 rounded-full flex items-center justify-center cursor-pointer">
            <IoMdCart />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Product;
