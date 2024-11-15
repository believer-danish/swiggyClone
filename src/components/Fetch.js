import { defaultMenu } from "../utils/data";
import ringLoad from "../../public/img/ringLoad.gif";
const Fetch = ({ setMenu }) => {
  function handleClick() {
    setMenu(defaultMenu);
  }
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <img src={ringLoad} alt="" />
      <h1 className="text-2xl font-bold">Loading Please Wait</h1>
      <h1
        onClick={handleClick}
        className=" rounded-2xl bg-orange-500 text-white px-4 py-2 cursor-pointer"
      >
        Load fast
      </h1>
    </div>
  );
};

export default Fetch;
