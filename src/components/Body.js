import ResCard from "./ResCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useResList from "../utils/useResList";
import useOnlineStatus from "../utils/useOnlineStatus";
import Search from "./Search";
import Carousel from "./Carousel";

const BodyComp = () => {
  console.log("body");

  const [restaurantList, setRestaurant] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [dish, setDish] = useState([]);

  const onlineStatus = useOnlineStatus();

  useResList(setRestaurant, setFilteredRestaurantList, setDish);

  if (onlineStatus === false) return <h1>Looks you are offline</h1>;

  console.log(restaurantList);
  if (restaurantList.length === 0) {
    return (
      <>
        <Search
          rl={restaurantList}
          frl={filteredRestaurantList}
          sfrl={setFilteredRestaurantList}
        />
        <Shimmer></Shimmer>
      </>
    );
  }

  return (
    <>
      {/* search section */}
      <Search
        rl={restaurantList}
        frl={filteredRestaurantList}
        sfrl={setFilteredRestaurantList}
      />

      {/* image carousel */}
      <Carousel items={dish} />

      {/* Restaurants  */}
      <section className="">
        <div className="m-auto flex max-w-[1440px] flex-wrap items-stretch justify-center gap-8 p-8 ">
          {filteredRestaurantList.map((restaurant) => {
            return (
              <Link
                className="w-80"
                key={restaurant.info.id}
                to={"/restaurant/" + restaurant.info.id}
              >
                <ResCard resData={restaurant} />
                {/* <Enhanced resData={restaurant} /> */}
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default BodyComp;
