import useResMenu from "../utils/useResMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import Accordion from "./Accordion";

const RestaurantPage = () => {
  console.log("respage");
  const { resId } = useParams();
  const resInfo = useResMenu(resId);
  // console.log(resInfo?.data);
  if (resInfo === null) return <Shimmer></Shimmer>;
  const {
    name,
    costForTwoMessage,
    cuisines,
    totalRatingsString,
    areaName,
    sla,
  } = resInfo?.data?.cards[2]?.card?.card?.info;

  // console.log(resInfo);

  const categories = resInfo?.data?.cards[
    resInfo.data.cards.length - 1
  ]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((ele) => {
    return (
      ele.card.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  });
  // console.log(categories);
  // console.log(categories);
  return (
    <div className="mx-4  max-w-[800px] flex flex-col gap-8 sm:mx-auto">
      {/* Header section */}
      <header className="border-[1px] border-solid border-gray-600  rounded-md flex flex-col gap-4 p-4 shadow-xl">
        <h1 className="text-2xl font-semibold py-4">{name}</h1>
        <div
          className="
        "
        >
          <p className="font-bold ">
            ✪ ({totalRatingsString}) . {costForTwoMessage}
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
      <section className="p-4 shadow-2xl border-[1px] border-solid border-gray-600 rounded-md">
        <h1 className="text-center font-extrabold text-2xl py-8 underline">
          Menu
        </h1>

        {/* Accordion */}

        {/* <Accordion categories={categories} /> */}
      </section>
    </div>
  );
};

export default RestaurantPage;
