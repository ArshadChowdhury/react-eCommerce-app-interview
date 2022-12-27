import React from 'react';
import TopCategoriesCard from './TopCategoriesCard';

const TopCategories = () => {
  return (
    <>
    <section className="topCat background">
      <div className="container">
        <div className="heading d_flex">
          <div className="heading-left row f_flex">
            <i className="fa fa-border-all"></i>
            <h2>Top Categories</h2>           
          </div>
          <div className="heading-right row">
            <span>View All</span>
            <i className="fa fa-caret-right"></i>
          </div>
        </div>
        <TopCategoriesCard />
      </div>
    </section>
    </>
  )
}

export default TopCategories