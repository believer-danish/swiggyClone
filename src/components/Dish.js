import { Link, useOutletContext } from "react-router-dom";
import ResCard from "./ResCard";

const Dish = () => {
  const [
    restaurantList,
    setRestaurant,
    filteredRestaurantList,
    setFilteredRestaurantList,
    dish,
    setDish,
  ] = useOutletContext();
  return (
    <section className="">
      <div className="m-auto flex max-w-[1440px] flex-wrap items-stretch justify-center gap-8 p-8 ">
        {filteredRestaurantList.map((restaurant) => {
          return (
            <Link
              className="w-80"
              key={restaurant.info.key || crypto.randomUUID()}
              to={"/restaurant/" + restaurant.info.id}
              state={restaurant.info}
            >
              <ResCard resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Dish;
