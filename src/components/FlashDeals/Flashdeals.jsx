import React from 'react';
import Flashcard from './Flashcard';

const Flashdeals = ({productItems, addToCart}) => {
    return (
        <>
            <section className="flash background">
                <div className="container">
                    <div className="heading f_flex">
                        <i className='fa fa-bolt'></i>
                        <h1>Flash Deals</h1>
                    </div>
                    <Flashcard  productItems={productItems} addToCart={addToCart}/>
                </div>
            </section>
        </>
    )
}

export default Flashdeals