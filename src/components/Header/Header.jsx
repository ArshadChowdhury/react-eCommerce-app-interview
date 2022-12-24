import React from 'react';
import Head from "./Head"
import Navbar from './Navbar';
import Search from './Search';
import Mainpage from '../Mainpage/Mainpage';
import "./Header.css"




const Header = () => {
  return (
    <>
    <Head />
    <Search />
    <Navbar />
    <Mainpage />
    </>
  )
}

export default Header
