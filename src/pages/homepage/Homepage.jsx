import React from 'react';
import Header from '../../components/Header/Header';
import Newarrivals from "../../components/Newarrivals/Newarrivals"
import Footer from "../../components/Footer/Footer";
import Discount from '../../components/Discount/Discount';
import Mainpage from "../../components/Mainpage/Mainpage";
import Flashdeals from "../../components/FlashDeals/Flashdeals";
import TopCategories from '../../components/TopCategories/TopCategories';
import Shop from "../../components/Shop/Shop";
import Features from "../../components/Features/Features";
import Specialoffer from "../../components/Specialoffer/SpecialOffer";


const Homepage = ({productItems, addToCart , cartItems, shopItems }) => {
  return (
    <>
   <Header cartItems={cartItems}/>
   <Mainpage />
   <Flashdeals productItems={productItems} addToCart={addToCart} />
   <TopCategories />
   <Newarrivals />
   <Discount />
   <Shop shopItems={shopItems} addToCart={addToCart} />
   <Specialoffer />
   <Features />
   <Footer />
    </>
  )
}

export default Homepage