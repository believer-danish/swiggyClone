import { useDispatch, useSelector } from "react-redux";
import { CategoryItems } from "./Accordion";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.item);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  console.log(cartItems);
  return (
    <div className="max-w-4xl mx-auto p-16 text-center">
      <div className="font-bold text-2xl flex justify-around items-center mb-8">
        <h1>Cart</h1>
        <button
          className="bg-black text-white p-2 rounded-full my-4"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
      <div>
        {cartItems.map((ele, i) => (
          <CategoryItems ele={ele} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
