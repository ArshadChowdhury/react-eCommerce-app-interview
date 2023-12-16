import React from "react";
import Singleproduct from "../../components/Singleproduct/Singleproduct";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Singleproductpage = ({ allProductsData, cartItems, addToCart }) => {
  return (
    <>
      <Header cartItems={cartItems} />
      <Singleproduct allProductsData={allProductsData} addToCart={addToCart} />
      <Footer />
    </>
  );
};

export default Singleproductpage;
