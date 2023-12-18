import React from "react";
import Dcard from "./Dcard";

const Discount = () => {
  return (
    <>
      <section className="huge-discounts background">
        <div className="container">
          <div className="heading">
            {/* <div className="heading-left row f_flex"> */}
            <img
              src="https://img.icons8.com/windows/32/fa314a/gift.png"
              alt="huge-discount-logo"
            />
            <h2>Huge Discounts</h2>
            {/* </div> */}
            {/* <div className="heading-right row">
                            <span>View All</span>
                            <i className="fa fa-caret-right"></i>
                        </div> */}
          </div>
          <Dcard />
        </div>
      </section>
    </>
  );
};

export default Discount;
