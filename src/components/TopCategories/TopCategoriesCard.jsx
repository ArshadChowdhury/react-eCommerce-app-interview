import React from 'react';
import topCategoriesdata from "./topCategoriesData";
import Slider from "react-slick";
import './topcategoriescard.css';

const TopCategoriesCard = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }
    ]
  };
  return (
    <>
    <Slider {...settings}>
    {
      topCategoriesdata.map((value, index) => {
        return(
          <div className="box-cate product" key={index}>
            <div className="nametop d_flex">
              <span className='tLeft'>{value.para}</span>
              <span className='tRight'>{value.desc}</span>
            </div>
            <div className="img img-cate">
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

export default TopCategoriesCard