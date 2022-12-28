import React from 'react';
import Cart from '../../components/Cart/Cart';
import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/Footer";

const Cartpage = ({ productItems, cartItems, addToCart, deleteFromCart, shopItems, checkOut ,removeFromCart }) => {
  // Cartpage consists of different smaller components I made so we can reuse them later when needed and sending different components necessary props to use them in there
  return (
    <>
      <Header productItems={productItems} cartItems={cartItems} />
      <Cart cartItems={cartItems} addToCart={addToCart} deleteFromCart={deleteFromCart} shopItems={shopItems} checkOut={checkOut} removeFromCart ={removeFromCart} />
      <Footer />
    </>
  )
}

export default Cartpage;