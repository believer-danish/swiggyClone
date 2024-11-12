import { useState, useEffect } from "react";

const useResMenu = (resId) => {
  const [items, setItems] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
      )}`
    );

    let json = await data.json();
    json = JSON.parse(json.contents);
    setItems(json);
  };
  // console.log("hello");
  return items;
};

export default useResMenu;
