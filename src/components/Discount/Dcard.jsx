import React from 'react';
import discountData from "./discountData.js";
import Slider from "react-slick";

const Dcard = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true,
        responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
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
                    {discountData.map((val, index) => {
                        return (
                            <div className="box product" key={index}>
                                <div className="img">
                                    <img src={val.cover} alt="" />
                                    <h4>{val.name}</h4>
                                    <span>{val.price}</span>
                                </div>

                            </div>
                        )
                    })}
            </Slider>
        </>
    )
}

export default Dcard