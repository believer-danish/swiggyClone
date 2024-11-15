import { XMarkIcon } from "@heroicons/react/24/outline";
import order from "../../public/img/order.gif";

const PopUp = ({ setShow }) => {
  function handleClick() {
    setShow(false);
  }
  return (
    <div className="w-full h-screen fixed bg-black/40 grid place-items-center top-0 left-0">
      <div>
        <h1 className="text-3xl text-white flex justify-between">
          Here is your Order{" "}
          <span className="cursor-pointer" onClick={handleClick}>
            <XMarkIcon className="size-12" />
          </span>
        </h1>
        <img src={order} alt="" />
      </div>
    </div>
  );
};

export default PopUp;
