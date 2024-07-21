import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const BodyComp = () => {
  const [restaurantList, setRestaurant] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.59080&lng=85.13480&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setRestaurant(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );

    setFilteredRestaurantList(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  if (restaurantList.length === 0) {
    return <Shimmer></Shimmer>;
  }

  return (
    <section className="body-section">
      <header className="body-section-header">
        <div className="search-bar">
          <input
            type="search"
            placeholder="Search for food and restaurants"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                console.log(restaurantList);
                const filteredList = restaurantList.filter((res) =>
                  res.info.name
                    .toLowerCase()
                    .includes(searchText.toLocaleLowerCase())
                );

                setFilteredRestaurantList(filteredList);
              }
            }}
          ></input>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>

        <select
          className="filter"
          onChange={() => {
            const filteredList = restaurantList.filter((res) => {
              if (res.info.avgRating > 4.3) return true;
            });

            setFilteredRestaurantList(filteredList);
          }}
        >
          <option value="" hidden>
            {" "}
            Filter
          </option>
          <option value="top-rated">Top Rated</option>
        </select>
      </header>
      <div className="res-container">
        {filteredRestaurantList.map((restaurant) => {
          return <ResCard key={restaurant.info.id} resData={restaurant} />;
        })}
      </div>
    </section>
  );
};

export default BodyComp;
