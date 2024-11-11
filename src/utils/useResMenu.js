import { useState, useEffect } from "react";

const useResMenu = (resId) => {
  const [items, setItems] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://api.allorigins.win/raw?url=${encodeURIComponent(
        `https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.59080&lng=85.13480&restaurantId=${resId}`
      )}`
    );

    const json = await data.json();
    setItems(json);
  };
  // console.log("hello");
  return items;
};

export default useResMenu;
