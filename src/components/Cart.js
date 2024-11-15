import { useDispatch, useSelector } from "react-redux";
import CategoryItems from "./CategoryItems";
import { clearCart } from "../utils/cartSlice";
import PopUp from "./PopUp";
import { useState } from "react";

const Cart = () => {
  let sum = 0;
  const cartItems = useSelector((store) => store.cart.item);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  function handleOrder() {
    dispatch(clearCart());
    setShow(true);
  }
  console.log(cartItems);
  return (
    <div className="max-w-6xl mx-auto p-16 text-center ">
      {show && <PopUp setShow={setShow} />}
      <div className="font-bold text-2xl flex justify-around items-center mb-8">
        <h1 className="text-white text-3xl">Cart</h1>
        <button
          className="bg-red-500 text-white p-4 rounded-full my-4"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>

      <div className="flex justify-between w-full bg-white rounded-3xl p-8 ">
        <div className="max-w-xl ">
          {cartItems.map((ele, i) => {
            sum +=
              ele.card.info.price / 100 || ele.card.info.defaultPrice / 100;
            return <CategoryItems ele={ele} key={i} addShow={false} />;
          })}
        </div>

        <div>
          <h1 className="text-3xl font-bold">
            Total: <span>₹{sum}</span>{" "}
          </h1>
          <button
            onClick={handleOrder}
            className="my-4 text-yellow-50 px-4 py-2 text-xl bg-red-500 rounded-xl"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
