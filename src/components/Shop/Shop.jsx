import React from "react";
import Categ from "./Categ";
import Shopcart from "./Shopcart";
import "./shop.css";

const Shop = ({ shopItems, addToCart }) => {
  return (
    <>
      <section className="shop background">
        <div className="container shop-container">
          <Categ shopItems={shopItems} addToCart={addToCart} />
          <div>
            <div className="heading">
              <div className="heading-left row f_flex">
                <h2>Mobile Phones</h2>
              </div>
              <div className="heading-right row">
                <span>View All</span>
                <i className="fa fa-caret-right"></i>
              </div>
            </div>
            <div className="product-content">
              <Shopcart shopItems={shopItems} addToCart={addToCart} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
