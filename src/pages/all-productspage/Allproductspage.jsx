import React from "react";
import Allproducts from "../../components/Allproducts/Allproducts";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Allproductspage = ({ cartItems, allProductsData, addToCart }) => {
  return (
    <>
      <Header cartItems={cartItems} />
      <Allproducts allProductsData={allProductsData} addToCart={addToCart} />
      <Footer />
    </>
  );
};

export default Allproductspage;
