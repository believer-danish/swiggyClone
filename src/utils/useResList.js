import { useEffect } from "react";
const cors = require("cors");
const useResList = (setRestaurant, setFilteredRestaurantList, setDish) => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(/scripts/x.js);

    const json = await data.json();
    console.log(json);

    const ele = json.data.cards.filter((ele) => {
      if (ele.card?.card?.gridElements?.infoWithStyle?.restaurants?.length > 7)
        return ele.card?.card?.gridElements?.infoWithStyle?.restaurants;
    });

    setRestaurant(ele[0].card?.card?.gridElements?.infoWithStyle?.restaurants);

    setFilteredRestaurantList(
      ele[0].card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    if (json?.data?.cards[0].card?.card?.gridElements?.infoWithStyle.info)
      setDish(
        json?.data?.cards[0].card?.card?.gridElements?.infoWithStyle.info
      );
  };
};

export default useResList;
