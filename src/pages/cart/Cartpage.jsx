import React from 'react';
import Cart from '../../components/Cart/Cart';
import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/Footer";

const Cartpage = ({ productItems, cartItems, addToCart, deleteFromCart, shopItems, checkOut }) => {
  return (
    <>
      <Header productItems={productItems} cartItems={cartItems} />
      <Cart cartItems={cartItems} addToCart={addToCart} deleteFromCart={deleteFromCart} shopItems={shopItems} checkOut={checkOut} />
      <Footer />
    </>
  )
}

export default Cartpage;