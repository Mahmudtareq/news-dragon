/* eslint-disable no-unused-vars */
import React from "react";
import Footer from "../pages/Shared/Footer/Footer";
import TopHeader from "../pages/Shared/TopHeader/TopHeader";
import HomeLayouts from "./HomeLayouts";

const Main = () => {
  return (
    <div>
      <TopHeader />
      <HomeLayouts />
      <Footer />
    </div>
  );
};

export default Main;
