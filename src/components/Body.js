import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link, useOutletContext } from "react-router-dom";
import useResList from "../utils/useResList";
import useOnlineStatus from "../utils/useOnlineStatus";
import Search from "./Search";
import Carousel from "./Carousel";

const BodyComp = () => {
  console.log("body");
  const [
    restaurantList,
    setRestaurant,
    filteredRestaurantList,
    setFilteredRestaurantList,
    dish,
    setDish,
  ] = useOutletContext();
  const onlineStatus = useOnlineStatus();
  useEffect(() => {
    function fun(e) {
      if (
        document.documentElement.scrollTop + window.innerHeight >=
        document.documentElement.scrollHeight - 800
      ) {
        console.log("called");
        setFilteredRestaurantList((prev) => {
          const newArr = prev.map((e) => {
            const newObj = structuredClone(e);
            newObj.info.key = crypto.randomUUID();
            return newObj;
          });
          console.log([...prev, ...newArr]);
          return [...prev, ...newArr];
        });
      }
    }
    function create(cb, delay) {
      let prev = 0;
      return function (...p) {
        let now = Date.now();
        if (now - prev >= delay) {
          prev = now;
          cb(...p);
        }
      };
    }
    const th = create(fun, 2000);

    window.addEventListener("scroll", th);

    return () => {
      window.removeEventListener("scroll", fun);
    };
  }, []);
  if (onlineStatus === false) return <h1>Looks you are offline</h1>;

  console.log(filteredRestaurantList);
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
                key={restaurant.info.key || crypto.randomUUID()}
                to={"/restaurant/" + restaurant.info.id}
              >
                <ResCard resData={restaurant} />
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default BodyComp;
