import Product from "./Product";
import Product1 from "../assets/images/product-1.png";
import Product2 from "../assets/images/product-2.png";
import Product3 from "../assets/images/product-3.png";
import Product4 from "../assets/images/product-4.png";
import Product5 from "../assets/images/product-5.png";
import Product6 from "../assets/images/product-6.png";
import Product7 from "../assets/images/product-7.png";
import Product8 from "../assets/images/product-8.png";

const products = [
  { id: 1, src: Product1, title: "Modern Wooden Chair", price: 120 },
  { id: 2, src: Product2, title: "Minimalist Table Lamp", price: 80 },
  { id: 3, src: Product3, title: "Cozy Fabric Sofa", price: 350 },
  { id: 4, src: Product4, title: "Classic Wooden Drawer", price: 200 },
  { id: 5, src: Product5, title: "Sleek Office Desk", price: 250 },
  { id: 6, src: Product6, title: "Luxury Leather Recliner", price: 400 },
  { id: 7, src: Product7, title: "Vintage Wall Clock", price: 60 },
  { id: 8, src: Product8, title: "Nordic Style Bed", price: 500 },
];

const BestSeller = () => {
  return (
    <>
      <section className="best-sellers-section max-w-7xl lg:max-w-6xl mx-auto pb-10 sm:pb-16 md:pb-20 border-b-2 border-[#F3F3F3]">
        <h2 className="mb-6 md:mb-12 font-semibold text-2xl text-center">
          Shop Best Sellers
        </h2>
        <div className="products-gallery px-4 sm:px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {products.map((product) => (
            <Product key={product.id} src={product.src} title={product.title} price={product.price} />
          ))}
        </div>
      </section>
    </>
  );
};

export default BestSeller;

