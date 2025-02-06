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
  { id: 1, src: Product1, title: "Modern Chair", price: 49.99 },
  { id: 2, src: Product2, title: "Elegant Sofa", price: 199.99 },
  { id: 3, src: Product3, title: "Wooden Table", price: 89.99 },
  { id: 4, src: Product4, title: "Luxury Lamp", price: 39.99 },
  { id: 5, src: Product5, title: "Cozy Bed", price: 299.99 },
  { id: 6, src: Product6, title: "Stylish Shelf", price: 59.99 },
  { id: 7, src: Product7, title: "Minimalist Clock", price: 19.99 },
  { id: 8, src: Product8, title: "Classic Rug", price: 79.99 },
];

const BestSeller = () => {
  return (
    <section className="best-sellers-section max-w-7xl mx-auto pb-10 sm:pb-16 md:pb-20 border-b-2 border-[#F3F3F3]">
      <h2 className="mb-6 md:mb-12 font-semibold text-2xl text-center">
        Shop Best Sellers
      </h2>
      <div className="products-gallery px-4 sm:6 md:14 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
        {products.map((product) => (
          <Product
            key={product.id} // Ensure key is unique
            id={product.id} // Pass unique id
            src={product.src}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
};

export default BestSeller;
