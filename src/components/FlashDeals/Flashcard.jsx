import React, { useState } from 'react';
import Slider from "react-slick";


// setting up arrows to display next and previous arrows and make them work
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

const Flashcard = ({productItems, addToCart}) => {

    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1)
    }

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
        {/* Used the react-slick-slider to make a fast and effective slider for the page */}
        <Slider {...settings}>
        {productItems.map((product, index) => {
            // mapping throught the array of data and using objects in the array to use in the page
            return (
                <div className="box" key={index}>
                <div className="product mtop">
                    <div className="img">
                        <span className='discount'>{product.discount}% Off</span>
                        <img src={product.img} alt="" />
                        <div className="product-like">
                            <label>{count}</label> <br />
                            <i className='fa-regular fa-heart' onClick={increment}></i>
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
                            <button onClick={() => addToCart(product)}>
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