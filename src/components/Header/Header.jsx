import React from 'react';
import Head from "./Head"
import Navbar from './Navbar';
import Search from './Search';
import Mainpage from '../Mainpage/Mainpage';
import Flashdeals from "../FlashDeals/Flashdeals";
import "./Header.css";
import Topcate from '../Top/Topcate';
import Newarrivals from '../Newarrivals/Newarrivals';
import Discount from '../Discount/Discount';
import Shop from '../Shop/Shop';
import Annoucement from '../Announcement/Annoucement';
import Wrapper from '../Wrapper/Wrapper';
import Footer from '../Footer/Footer';



const Header = ({flashDealsData, addToCart , cartItems, shopItems }) => {
  return (
    <>
    <Head />
    <Search cartItems={cartItems}/>
    <Navbar />
    <Mainpage />
    <Flashdeals flashDealsData={flashDealsData} addToCart={addToCart} />
    <Topcate />
    <Newarrivals />
    <Discount />
    <Shop shopItems={shopItems} addToCart={addToCart} />
    <Annoucement />
    <Wrapper />
    <Footer />
    </>
  )
}

export default Header
