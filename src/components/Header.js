import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import cartIcon from "/assets/image/shopping-cart.png";
import { useSelector } from "react-redux";
import logo from "./../../assets/image/swiggy_logo.svg";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
// import UserContext from "../utils/UserContext";

const Header = () => {
  // console.log("header");
  // const data = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.item);
  const [bars, setBars] = useState(true);

  return (
    <header className="shadow-xl text-slate-500">
      <section className="m-2 py-4 flex items-center justify-around gap-4 px-8  ">
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
            className={`p-5 md:flex md:w-full md:items-center md:static md:h-auto md:flex-row md:bg-none gap-6 text-xl  fixed w-80 h-screen bg-gradient-to-r to-orange-500 from-orange-300 ${
              bars ? "-right-full" : "right-0"
            } top-24 flex flex-col justify-start items-start transition-all`}
          >
            <Link
              to="/"
              className="text-center hover:shadow-[0px_2px_0px_gray]"
            >
              <li>Home</li>
            </Link>
            <Link to="/offers" className="hover:shadow-[0px_2px_0px_gray]">
              <li>Offers</li>
            </Link>
            <Link to="/contact" className="hover:shadow-[0px_2px_0px_gray]">
              <li>Contact</li>
            </Link>
            <Link to="/account" className="hover:shadow-[0px_2px_0px_gray]">
              <li>Account</li>
            </Link>

            <Link to="/cart" className="hover:shadow-[0px_2px_0px_gray]">
              <li className="flex gap-2 items-center justify-center">
                <img src={cartIcon} width={50} height={50} /> (
                {cartItems.length})
              </li>
            </Link>
          </ul>
          <div
            onClick={() => setBars(!bars)}
            className="md:hidden cursor-pointer"
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
