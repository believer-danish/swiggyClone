import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import cartIcon from "/assets/image/shopping-cart.png";
import { useSelector } from "react-redux";
import logo from "./../../assets/image/swiggy_logo.svg";

// import UserContext from "../utils/UserContext";

const Header = () => {
  // console.log("header");
  // const data = useContext(UserContext);
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.item);

  return (
    <header className="shadow-xl text-slate-500">
      <section className="m-2 py-4 flex items-center justify-around gap-4 px-8 max-[768px]:flex-col ">
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

        <nav className="justify-betwee flex">
          <ul className="flex w-full items-center gap-6 text-xl max-[768px]:flex-col">
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

            {/* <li className="font-bold">{data.name}</li> */}
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default Header;
