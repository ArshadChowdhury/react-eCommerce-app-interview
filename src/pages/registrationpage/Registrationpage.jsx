import React from "react";
import Header from "../../components/Header/Header";
import Registrationform from "../../components/Registrationform/Registrationform";
import Footer from "../../components/Footer/Footer";

const Registrationpage = ({ cartItems }) => {
  // // Registrationpage consists of different smaller components I made so we can reuse them later when needed and sending different components necessary props to use them in there
  return (
    <>
      <Header cartItems={cartItems} />
      <Registrationform />
      <Footer />
    </>
  );
};

export default Registrationpage;
