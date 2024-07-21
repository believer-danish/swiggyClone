import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComp from "./components/HeaderComp";
import BodyComp from "./components/BodyComp";

const AppLayout = () => {
  
  return (
    <main className="app-container">
      <HeaderComp />
      
      <BodyComp />
    </main>
  );
};

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<AppLayout />);
