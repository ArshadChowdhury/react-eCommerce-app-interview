import React from "react";
import { useParams } from "react-router-dom";
import "./singleproduct.css";

const Singleproduct = ({ allProductsData, addToCart }) => {
  let id = useParams();
  return (
    <>
      {allProductsData.map((product, index) => {
        if (product.id == id.id) {
          return (
            <div key={index}>
              <section className="single-product">
                <div className="heading-prod">{product.name}</div>
                <div className="single-product-flex">
                  <div className="single-img">
                    <img src={product.img} alt="" />
                    <div className="price">{product.price}.00$</div>
                  </div>
                  <div className="description">
                    {product.desc}
                    <div className="rate-single">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <div>
                      Currently it's {product.discount}% Off but not for long
                    </div>
                  </div>
                  <button
                    aria-label="Add to cart"
                    className="cart-add-btn"
                    onClick={() => addToCart(product)}
                  >
                    Add To Cart
                  </button>
                </div>
              </section>
            </div>
          );
        }
      })}
    </>
  );
};
export default Singleproduct;
