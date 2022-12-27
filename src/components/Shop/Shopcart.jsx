import React, { useState } from 'react';

const Shopcart = ({shopItems, addToCart}) => {

    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1)
    }

    return (
        <>
        {shopItems.map((product, index) => {
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
      
        </>
    )
}

export default Shopcart;