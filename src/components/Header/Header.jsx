import React from 'react';
import Head from "./Head"
import Navbar from './Navbar';
import Search from './Search';
import "./Header.css"

const Header = () => {
  return (
    <>
    <Head />
    <Search />
    <Navbar />
    </>
  )
}

export default Header
