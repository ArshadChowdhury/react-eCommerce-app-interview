import React from 'react';
import tData from "./tData.js";
import Slider from "react-slick";
import "./Topcart.css"

const Topcart = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true
  };
  return (
    <>
    <Slider {...settings}>
    {
      tData.map((value, index) => {
        return(
          <div className="box product" key={index}>
            <div className="nametop d_flex">
              <span className='tLeft'>{value.para}</span>
              <span className='tRight'>{value.desc}</span>
            </div>
            <div className="img">
              <img src={value.cover} alt="" />
            </div>
          </div>
        )
      })
    }
    </Slider>
    </>
  )
}

export default Topcart