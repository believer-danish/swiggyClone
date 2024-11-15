import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const CategoryItems = ({ ele, addShow = true }) => {
  const { name, price, ratings, id, imageId, defaultPrice, description } =
    ele?.card?.info;
  const [isMore, setIsMore] = useState(true);
  const [des, setDes] = useState(description && description.slice(0, 145));
  const dispatch = useDispatch();

  const [show, setShow] = useState(0);
  const handleAddItem = (e) => {
    e.stopPropagation();
    dispatch(addItem(ele));
    setShow((prev) => prev + 1);
  };

  function handleRemoveItem() {
    dispatch(removeItem(ele));
    setShow((prev) => prev - 1);
  }

  return (
    <div key={id}>
      <div className="border-b-[1px] py-4 flex  ">
        <div className=" w-full">
          <h1 className="font-medium text-gray-700">{name}</h1>
          <span className="text-sm">₹{price / 100 || defaultPrice / 100}</span>
          <p className="text-sm">
            <span className="text-green-600">★ </span>
            <span>
              {ratings?.aggregatedRating?.rating || "3.7"} (
              {ratings?.aggregatedRating?.ratingCountV2 || "1000+"})
            </span>
          </p>

          {addShow && (
            <p>
              {des}
              <span
                className="font-bold"
                onClick={() => {
                  setDes(ele?.card?.info?.description);
                  setIsMore(false);
                }}
              >
                {isMore ? "...more" : ""}
              </span>
            </p>
          )}
        </div>

        <div className="w-1/4 ">
          <img src={CDN_URL + imageId} alt="menu item name " className="mb-2" />

          {addShow && (
            <div className="border-2 border-black rounded  p-1  w-full  mx-auto cursor-pointer">
              {show ? (
                <p className="flex justify-around ">
                  <span
                    className="text-xl w-8 text-center"
                    onClick={handleAddItem}
                  >
                    +{" "}
                  </span>
                  {show}
                  <span
                    className="text-xl w-8 text-center"
                    onClick={handleRemoveItem}
                  >
                    {" "}
                    -{" "}
                  </span>{" "}
                </p>
              ) : (
                <span
                  className="text-center w-full block"
                  onClick={handleAddItem}
                >
                  Add
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryItems;
