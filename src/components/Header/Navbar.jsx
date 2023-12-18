import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <header className="container">
        <div className="menu-items">
          <div className="categories">
            <span className="fa-solid fa-border-all"></span>
            <h4 className="head-categories">One Place To Buy Everything</h4>
          </div>
          <ul
            className={
              mobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"
            }
            onClick={() => setMobileMenu(false)}
          >
            <li>
              <Link className="link-hover" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link-hover" to="/all-products">
                All Products
              </Link>
            </li>
            <li>
              <Link className="link-hover" to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link className="link-hover" to="/registration">
                Registration
              </Link>
            </li>
            {/* <li>
              <Link to="/admin-dashboard">Admin Dashboard</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li> */}
          </ul>
        </div>
        <button className="toggle" onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? (
            <i className="fas fa-times close home-btn"></i>
          ) : (
            <i className="fa fa-bars open"></i>
          )}
        </button>
      </header>
    </>
  );
};

export default Navbar;
