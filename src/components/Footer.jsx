import FLogo from "../assets/images/footer-logo.png";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section className="footer-copyright  bg-[#A1A483]">
      <div className="max-w-[1016px] mx-auto text-center sm:flex justify-between items-center px-6 lg:px-0 pb-12">
        <img src={FLogo} alt="" className="pb-7 pt-7 mx-auto sm:mx-0" />
        <div className="footer-social-icons flex justify-center gap-5">
          <div className="single-icon h-12 w-12 border-2 border-white flex items-center justify-center text-white rounded-full">
            <FaLinkedinIn className="text-2xl" />
          </div>
          <div className="single-icon h-12 w-12 border-2 border-white flex items-center justify-center text-white rounded-full">
            <FaFacebookF className="text-2xl" />
          </div>
          <div className="single-icon h-12 w-12 border-2 border-white flex items-center justify-center text-white rounded-full">
            <FaInstagram className="text-2xl" />
          </div>
          <div className="single-icon h-12 w-12 border-2 border-white flex items-center justify-center text-white rounded-full">
            <FaYoutube className="text-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
