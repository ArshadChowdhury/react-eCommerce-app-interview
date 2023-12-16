import React from "react";
import Categories from "./Categories";
import Slider from "./Slider";
import "./Mainpage.css";

const Mainpage = () => {
  return (
    <>
      <section className="main-page">
        <div className="container slider-container">
          <Categories />
          <Slider />
        </div>
      </section>
    </>
  );
};

export default Mainpage;
