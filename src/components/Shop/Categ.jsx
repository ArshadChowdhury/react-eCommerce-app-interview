import React from "react";

const Categ = () => {
  const data = [
    {
      cateImg: "./assets/brand/brand-1.png",
      cateName: "Apple",
    },
    {
      cateImg: "./assets/brand/brand-2.png",
      cateName: "Samasung",
    },
    {
      cateImg: "./assets/brand/brand-3.png",
      cateName: "Oppo",
    },
    {
      cateImg: "./assets/brand/brand-2.png",
      cateName: "Vivo",
    },
    {
      cateImg: "./assets/brand/brand-1.png",
      cateName: "Redimi",
    },
    {
      cateImg: "./assets/brand/brand-2.png",
      cateName: "Sony",
    },
  ];
  return (
    <>
      <div className="category">
        <div className="chead">
          <h1>Brands</h1>
          <h1>Shops</h1>
        </div>
        {data.map((value, index) => {
          return (
            <div
              style={{ display: "flex", borderRadius: "10px" }}
              className="box brand-box"
              key={index}
            >
              <img src={value.cateImg} alt="" />
              <span>{value.cateName}</span>
            </div>
          );
        })}
        <div className="box box2">
          <button>View All Brands</button>
        </div>
      </div>
    </>
  );
};

export default Categ;
