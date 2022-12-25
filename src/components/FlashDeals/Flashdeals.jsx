import React from 'react';
import Flashcard from './Flashcard';

const Flashdeals = ({flashDealsData, addToCart}) => {
    return (
        <>
            <section className="flash background">
                <div className="container">
                    <div className="heading f_flex">
                        <i className='fa fa-bolt'></i>
                        <h1>Flash Deals</h1>
                    </div>
                    <Flashcard  flashDealsData={flashDealsData} addToCart={addToCart}/>
                </div>
            </section>
        </>
    )
}

export default Flashdeals