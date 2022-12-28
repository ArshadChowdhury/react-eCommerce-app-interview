import React from 'react';
import Header from '../../components/Header/Header';
import Loginform from '../../components/Loginform/Loginform';

const Loginpage = ({cartItems}) => {
  // Loginpage consists of different smaller components I made so we can reuse them later when needed and sending different components necessary props to use them in there
  return (
    <>
    <Header cartItems={cartItems}/>
    <Loginform />
    </>
  )
}

export default Loginpage;