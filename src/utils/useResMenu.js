import { useState, useEffect } from "react";
import { resMenu } from "./data";

const useResMenu = (resId) => {
  const [items, setItems] = useState(null);
  let latitude = 21.9974;
  let longitude = 79.0011;

  navigator.geolocation.getCurrentPosition((pos) => {
    // console.log(pos);
    latitude = pos.coords.latitude;
    longitude = pos.coords.longitude;
  });

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${latitude}&lng=${longitude}&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
      )}`
    );

    let json = await data.json();
    json = JSON.parse(json.contents);

    // const data = await fetch(
    //   `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${latitude}&lng=${longitude}&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    // );
    // const json = await data.json();
    console.log(json);
    setItems(json);
  };
  // console.log("hello");
  return items;
};

export default useResMenu;
