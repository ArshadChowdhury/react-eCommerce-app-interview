import React from 'react'

const Categ = ({shopItems}) => {
    const data = [
        {
          cateImg: "../../src/assets/brand-1.png",
          cateName: "Apple",
        },
        {
          cateImg: "../../src/assets/brand-2.png",
          cateName: "Samasung",
        },
        {
          cateImg: "../../src/assets/brand-3.png",
          cateName: "Oppo",
        },
        {
          cateImg: "../../src/assets/brand-2.png",
          cateName: "Vivo",
        },
        {
          cateImg: "../../src/assets/brand-1.png",
          cateName: "Redimi",
        },
        {
          cateImg: "../../src/assets/brand-2.png",
          cateName: "Sony",
        },
      ]
  return (
    <>
    <div className="category">
        <div className='chead d_flex'>
            <h1>Brands</h1>
            <h1>Shops</h1>
        </div>
        {data.map((value,index)=>{
                return(
                    <div className="box f_flex" key={index}>
                        <img src={value.cateImg} alt="" />
                        <span>{value.cateName}</span>
                    </div>
                )
            }
        )}
        <div className="box box2"><button>View All Brands</button></div>
    </div>
    </>
  )
}

export default Categ