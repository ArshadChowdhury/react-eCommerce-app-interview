import React from 'react';
import Categories from './Categories';
import Slider from './Slider';
import "./Mainpage.css";
import Flashdeals from '../FlashDeals/Flashdeals';


const Mainpage = () => {
  return (
    <>
    <section className="main-page">
      <div className="container d_flex">
        <Categories />
        <Slider />
      </div>
    </section>
    <Flashdeals />
    </>
  )
}

export default Mainpage