import React from 'react';
import Header from '../../components/Header/Header';
import Loginform from '../../components/Loginform/Loginform';

const Login = ({cartItems}) => {
  return (
    <>
    <Header cartItems={cartItems}/>
    <Loginform />
    </>
  )
}

export default Login;