import React from 'react';
import "./announcement.css"

const Annoucement = () => {
  return (
    <>
    <section className="annoucement background">
        <div className="container d_flex">
            <div className="banner-img1 banner"> 
                <img src="../../src/assets/banner-1.png"/>
            </div>
            <div className="banner-img2 banner">
                <img src="../../src/assets/banner-2.png"/>
            </div>
            <div className="banner-img3 banner">
                <img src="../../src/assets/banner-3.jpg"/>
            </div>
            
        </div>
    </section>
    </>
  )
}

export default Annoucement