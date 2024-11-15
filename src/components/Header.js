import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import logo from "./../../assets/image/swiggy_logo.svg";
import {
  Bars3Icon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
// import UserContext from "../utils/UserContext";

const Header = () => {
  // console.log("header");
  // const data = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.item);
  const [bars, setBars] = useState(true);

  return (
    <header className="shadow-xl text-slate-100 svgBackground ">
      <section className=" py-4 flex items-center justify-around gap-4 px-8  ">
        <div
          className="w-10 overflow-hidden rounded-full"
          onClick={() => {
            window.location.reload();
          }}
        >
          <Link to="/">
            <img className="w-full" src={logo} alt="Logo" />
          </Link>
        </div>

        <nav className="">
          <ul
            className={`z-10 p-5 md:flex md:w-full md:items-center md:static md:h-auto md:flex-row md:bg-none gap-6 text-xl  fixed w-80 h-screen bg-gradient-to-r to-orange-500 from-orange-300 ${
              bars ? "-right-full" : "right-0"
            } top-0 flex flex-col justify-start items-start transition-all`}
          >
            <Link
              to="/"
              className="text-center hover:shadow-[0px_2px_0px_gray]"
            >
              <li>Home</li>
            </Link>
            <Link to="/about" className="hover:shadow-[0px_2px_0px_gray]">
              <li>About</li>
            </Link>
            <Link to="/contact" className="hover:shadow-[0px_2px_0px_gray]">
              <li>Contact</li>
            </Link>

            <Link to="/cart" className="hover:shadow-[0px_2px_0px_gray]">
              <li className="flex gap-2 items-center justify-center">
                <ShoppingCartIcon className="size-12" />({cartItems.length})
              </li>
            </Link>
          </ul>
          <div
            onClick={() => setBars(!bars)}
            className={`md:hidden cursor-pointer z-10 ${
              bars ? "" : "fixed top-4"
            }`}
          >
            {bars ? (
              <Bars3Icon className="size-12 " />
            ) : (
              <XMarkIcon className="size-12 " />
            )}
          </div>
        </nav>
      </section>
    </header>
  );
};

export default Header;
