import React from 'react';
import Header from '../../components/Header/Header';
import Registrationform from '../../components/Registrationform/Registrationform';

const Registration = ({cartItems}) => {
  return (
    <>
    <Header cartItems={cartItems}/>
    <Registrationform />
    </>
  )
}

export default Registration