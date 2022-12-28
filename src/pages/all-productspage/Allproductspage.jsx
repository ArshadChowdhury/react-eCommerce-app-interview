import React from 'react';
import Allproducts from '../../components/Allproducts/Allproducts';
import Header from '../../components/Header/Header';

const Allproductspage = ({cartItems, allProductsData, addToCart}) => {
  return (
    <>
  <Header cartItems={cartItems}/>
  <Allproducts allProductsData={allProductsData} addToCart={addToCart} />
    </>
  )
}

export default Allproductspage;