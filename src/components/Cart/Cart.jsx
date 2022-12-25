import React from 'react';
import Head from '../Header/Head';
import Search from '../Header/Search';
import "./Cart.css";

const Cart = ({ cartItems, addToCart, deleteFromCart }) => {

    const totalPrice = cartItems.reduce((price, item) => price + item.qty * item.price, 0)
    return (
        <>
            <Head />
            <Search cartItems={cartItems} />
            <section className="cart-items">
                <div className="container d_flex">
                    <div className="cart-details">
                        {cartItems.length === 0 && <h1 className="no-items product">No items are added in the cart.</h1>}
                        {cartItems.map((item) => {
                            const productQty = item.price * item.qty
                            return (
                                <div className="cart-list product d_flex" key={item.id}>
                                    <div className="img">
                                        <img src={item.img} alt="Picture of this item is unavailable" />
                                    </div>
                                    <div className="cart-details">
                                        <h3>{item.name}</h3>
                                        <h4>{item.price}.00 * {item.qty}</h4>
                                        <span>${productQty}.00</span>
                                    </div>
                                    <div className="cart-items-function">
                                        <div className="removeCart">
                                            <button >
                                                <i className='fa-solid fa-xmark'></i>
                                            </button>
                                        </div>
                                        <div className='cartControl d_flex'>
                                            <button className='inCart' onClick={() => addToCart(item)}>
                                                <i className='fa fa-plus'></i>
                                            </button>
                                            <button className='delCart' onClick={() => deleteFromCart(item)}>
                                                <i className='fa fa-minus'></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="cart-item-price"></div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="cart-total product">
                        <h2>Cart Summary</h2>
                        <div className="d_flex">
                            <h4>Total Price :</h4>
                            <h3>${totalPrice}.00</h3>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Cart