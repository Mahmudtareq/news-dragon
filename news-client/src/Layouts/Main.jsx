/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import HomeLayouts from "./HomeLayouts";

const Main = () => {
  return (
    <div>
      <Header />
      <HomeLayouts />
      <Footer />
    </div>
  );
};

export default Main;
