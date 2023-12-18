import React from "react";
import newArrivalData from "./newArrivalData.js";
import "./newArrivals.css";

const Newarrivals = () => {
  return (
    <>
      <section className="newarrivals background">
        <div className="container">
          <div className="heading">
            {/* <div className="heading-left row f_flex"> */}
            <img
              src="https://img.icons8.com/glyph-neue/64/26e07f/new.png"
              alt="new-arrivals-logo"
            />
            <h2>New Arrivals</h2>
            {/* </div> */}
            {/* <div className="heading-right row">
              <span>View All</span>
              <i className="fa fa-caret-right"></i>
            </div> */}
          </div>
          <div className="content product-new-arrival">
            {newArrivalData.map((val, index) => {
              return (
                <div className="box" key={index}>
                  <div className="img">
                    <img src={val.cover} alt="" />
                    <h4>{val.name}</h4>
                    <span>{val.price}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Newarrivals;
