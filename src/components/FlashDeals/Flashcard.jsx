import React from 'react';
import Slider from "react-slick";
import flashDeasData from "./flashDealsData";

const NextArrow = (props) =>{
    const {onClick} = props;
    return (

        <div className="control-btn" onClick={onClick}>
            <button className='next'>
                <i className='fa fa-long-arrow-alt-right'></i>
            </button>
        </div>

    )
}
const PrevArrow = (props) =>{
    const {onClick} = props;
    return (

        <div className="control-btn" onClick={onClick}>
            <button className='prev'>
                <i className='fa fa-long-arrow-alt-left'></i>
            </button>
        </div>

    )
}

const Flashcard = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      };
    return (
        <>
        <Slider {...settings}>
        {flashDeasData.map((product, index) => {
            return (
                <div className="box" key={index}>
                <div className="product mtop">
                    <div className="img">
                        <span className='discount'>{product.discount}% Off</span>
                        <img src={product.cover} alt="" />
                        <div className="product-like">
                            <label>0</label> <br />
                            <i className='fa-regular fa-heart'></i>
                        </div>
                    </div>
                    <div className="product-details">
                        <h3>{product.name}</h3>
                        <div className="rate">
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                        </div>
                        <div className="price">
                            <h4>{product.price}.00</h4>
                            <button>
                                <i className='fa fa-plus'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            )

        })}
            </Slider>
        </>
    )
}

export default Flashcard