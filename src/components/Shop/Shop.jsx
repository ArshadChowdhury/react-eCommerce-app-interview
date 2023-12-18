import React from "react";
import Categ from "./Categ";
import { useNavigate } from "react-router-dom";
import Shopcart from "./Shopcart";
import "./shop.css";

const Shop = ({ shopItems, addToCart }) => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    // Add the path you want to redirect to
    const targetPath = "/all-products";
    navigate(targetPath);
  };

  return (
    <>
      <section className="shop background">
        <div className="container shop-container">
          <Categ shopItems={shopItems} addToCart={addToCart} />
          <div className="shop-main">
            <div className="heading heading-view-all">
              <div className="heading-left row f_flex">
                <h2>Mobile Phones</h2>
              </div>
              <div onClick={handleRedirect} className="heading-right row">
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
