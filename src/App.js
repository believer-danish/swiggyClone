import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error.js";
import RestaurantPage from "./components/RestaurantPage.js";
import Contact from "./components/Contact.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import { Provider } from "react-redux";
import Cart from "./components/Cart.js";
import useResList from "./utils/useResList.js";
// import UserContext from "./utils/UserContext.js";

const Account = lazy(() => {
  return import("./components/Account.js");
});

const App = () => {
  const [restaurantList, setRestaurant] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [dish, setDish] = useState([]);

  useResList(setRestaurant, setFilteredRestaurantList, setDish);

  return (
    <main className="app-container">
      <Provider store={appStore}>
        <Header />
        <Outlet
          context={[
            restaurantList,
            setRestaurant,
            filteredRestaurantList,
            setFilteredRestaurantList,
            dish,
            setDish,
          ]}
        />
      </Provider>
    </main>
  );
};

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/offers",
        element: <h1>offer</h1>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/account",
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <Account />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantPage></RestaurantPage>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<RouterProvider router={appRoutes}></RouterProvider>);
