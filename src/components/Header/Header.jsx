import React from 'react';
import Head from "./Head"
import Navbar from './Navbar';
import Search from './Search';
import Mainpage from '../Mainpage/Mainpage';
import Flashdeals from "../FlashDeals/Flashdeals";
import "./Header.css"




const Header = ({flashDealsData, addToCart , cartItems }) => {
  return (
    <>
    <Head />
    <Search cartItems={cartItems}/>
    <Navbar />
    <Mainpage />
    <Flashdeals flashDealsData={flashDealsData} addToCart={addToCart} />
    </>
  )
}

export default Header
