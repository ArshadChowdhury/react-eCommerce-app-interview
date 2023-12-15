import React from "react";
import categoryData from "./categoryData";

const Categories = () => {
  return (
    <div className="category">
      {categoryData.map((category, index) => {
        return (
          <div className="box-category box f_flex" key={index}>
            <img src={category.categoryImg} alt="no img" />
            <span>{category.categoryName}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
