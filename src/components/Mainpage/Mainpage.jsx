import React from 'react';
import Categories from './Categories';
import Slider from './Slider';
import './mainpage.css';


const Mainpage = () => {
  return (
    <>
    <section className="main-page">
      <div className="container d_flex">
        <Categories />
        <Slider />
      </div>
    </section>
    </>
  )
}

export default Mainpage