import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/housedecor-logo.png";
import NavCart from "../assets/images/nav-cart-icon.png";
import HumburgerIcon from "../assets/images/hamburger-icon.png";
import { useState } from "react";

const Header = () => {
  const [drop, setDrop] = useState(false);
  const [cartDrop, setCartDrop] = useState(false);

  return (
    <>
      <section className="bg-headerBackgroundColor sticky top-0 left-0 w-full">
        <div className="max-w-7xl mx-auto py-4 sm:py-5 md:py-7 px-6 xl:px-2 flex justify-between items-center ">
          <div className="mobile-hamburger-icon md:hidden relative">
            <img src={HumburgerIcon} className="cursor-pointer" alt="" onClick={() => setDrop(!drop)} />
          {drop && (
            <div className="drop__down w-[160px] px-6 py-4 bg-headerBackgroundColor absolute left-0 top-7">
              <ul className="text-white grid gap-[6px] uppercase">
                <li>
                  <NavLink to={"/"}>BEDROOM</NavLink>
                </li>
                <li>
                  <NavLink to={"/"}>LIVING ROOM</NavLink>
                </li>
                <li>
                  <NavLink to={"/"}>KITCHEN</NavLink>
                </li>
                <li>
                  <NavLink to={"/"}>BATHROOM</NavLink>
                </li>
                <li>
                  <NavLink to={"/"}>SALE</NavLink>
                </li>
              </ul>
            </div>
          )}
          </div>
          <div className="nav-logo">
            <Link to={"/"}>
              <img
                src={Logo}
                alt="HouseDecor logo"
                className="w-32 md:w-full"
              />
            </Link>
          </div>
          <div className="nav-links-icon flex gap-6 lg:gap-14 items-center">
            <ul className="hidden md:flex gap-5 lg:gap-8 text-white uppercase lg:text-lg">
              <li>
                <NavLink to={"/"}>BEDROOM</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>LIVING ROOM</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>KITCHEN</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>BATHROOM</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>SALE</NavLink>
              </li>
            </ul>
            <div className="nav-cart-icon h-7 w-7 lg:h-9 lg:w-9 flex justify-center items-center border border-white rounded-full relative">
              <img src={NavCart} alt="Nav Cart icon" className="cursor-pointer" onClick={()=>setCartDrop(!cartDrop)}/>
              {cartDrop && 
              <div className="cart__drop__down w-[200px] px-6 py-4 bg-headerBackgroundColor absolute right-0 top-10">
                <p className="text-white text-sm">Your cart is empty.</p>
              </div>
              }
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
