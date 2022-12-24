import React from 'react';
import Categories from './Categories';
import Slidecard from './Slidecard';
import "./Mainpage.css";


const Mainpage = () => {
  return (
    <>
    <section className="main-page">
      <div className="container d_flex">
        <Categories />
        <Slidecard />
      </div>
    </section>
    </>
  )
}

export default Mainpage