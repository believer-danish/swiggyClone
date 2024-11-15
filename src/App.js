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
import Loading from "./components/Loading.js";
import About from "./components/About.js";
import Dish from "./components/Dish.js";

const App = () => {
  const [restaurantList, setRestaurant] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [dish, setDish] = useState([]);
  const [load, setLoad] = useState(true);
  useResList(setRestaurant, setFilteredRestaurantList, setDish);
  setTimeout(() => {
    setLoad(false);
  }, 4000);
  return (
    <main className="app-container">
      {load ? (
        <Loading />
      ) : (
        <Provider store={appStore}>
          <Header />
          <div className="svgBackground">
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
          </div>
        </Provider>
      )}
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
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantPage></RestaurantPage>,
      },
      {
        path: "/dish",
        element: <Dish />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<RouterProvider router={appRoutes}></RouterProvider>);
