import useResMenu from "../utils/useResMenu";

import { useLocation, useNavigate, useParams } from "react-router-dom";
import Accordion from "./Accordion";
import Loading from "./Loading";
import { useEffect, useState } from "react";
import Fetch from "./Fetch";

const RestaurantPage = () => {
  const navigate = useNavigate();
  const { resId } = useParams();
  const data = useResMenu(resId);
  const [show, setShow] = useState(true);
  const [menu, setMenu] = useState(null);
  const { name, costForTwo, cuisines, totalRatingsString, areaName, sla } =
    useLocation().state;
  const resInfo = data ? data : menu;
  const categories = resInfo?.data?.cards[
    resInfo.data.cards.length - 1
  ]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((ele) => {
    return (
      ele.card.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  });

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 4000);
  }, []);

  return show ? (
    <Loading />
  ) : (
    <div className="mx-4  max-w-[800px] flex flex-col gap-8 sm:mx-auto min-h-screen">
      <h1
        onClick={() => {
          navigate("/cart");
        }}
        className="sticky top-2 cursor-pointer text-white  bg-orange-400 p-4 rounded-2xl w-1/3 mx-auto text-center font-bold md:hidden"
      >
        GO TO CART
      </h1>
      {/* Header section */}
      <header className="border-[1px] border-solid mt-4 border-gray-600  rounded-md flex flex-col gap-4 p-4 shadow-xl bg-white">
        <h1 className="text-2xl font-semibold py-4">{name}</h1>

        <div
          className="
        "
        >
          <p className="font-bold ">
            ✪ ({totalRatingsString}) . {costForTwo}
          </p>
          <p className="text-orange-600 underline font-semibold">
            {cuisines.join(" , ")}
          </p>
        </div>

        <div>
          <p>
            <span className="font-bold">Outlet: </span>
            {areaName}
          </p>
          <p>
            <span className="font-bold">Time: </span>
            {sla.deliveryTime || sla.maxDeliveryTime} mins.
          </p>
        </div>
      </header>

      {/* Menu section */}
      <section className="p-4 shadow-2xl border-[1px] border-solid border-gray-600 rounded-md bg-white ">
        <h1 className="text-center font-extrabold text-2xl py-8 underline">
          Menu
        </h1>

        {/* Accordion */}

        {resInfo ? (
          <Accordion categories={categories} />
        ) : (
          <Fetch setMenu={setMenu} />
        )}
      </section>
    </div>
  );
};

export default RestaurantPage;
