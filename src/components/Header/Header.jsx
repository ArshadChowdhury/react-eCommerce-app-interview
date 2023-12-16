import React from "react";
import Head from "./Head";
import Navbar from "./Navbar";
import Search from "./Search";
import "./Header.css";

const Header = ({ cartItems }) => {
  return (
    <>
      <Head />
      <Search cartItems={cartItems} />
      <Navbar />
    </>
  );
};

export default Header;
