import { Routes, Route } from "react-router-dom";
import "../App.css";
import Cartpage from "../pages/cartpage/Cartpage";
import Homepage from "../pages/homepage/Homepage";
import Loginpage from "../pages/loginpage/Loginpage";
import Registrationpage from "../pages/registrationpage/Registrationpage";
import Allproductspage from "../pages/all-productspage/Allproductspage";
import Singleproductpage from "../pages/product-details/Singleproductpage";
import ErrorNotFound from "../components/ErrorNotFoundPage/ErrorNotFound";
import ScrollToTop from "../components/ScrollToTop";

const AllRoutes = ({
  productItems,
  cartItems,
  addToCart,
  shopItems,
  deleteFromCart,
  checkOut,
  removeFromCart,
  allProductsData,
}) => {
  return (
    // setting up all the routes here with react-router dom and sending necessary props to each child element all the routing is being done here
    // different components are being sent as elements when going for different routes they're stored in the pages folder
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              productItems={productItems}
              cartItems={cartItems}
              addToCart={addToCart}
              shopItems={shopItems}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cartpage
              cartItems={cartItems}
              addToCart={addToCart}
              deleteFromCart={deleteFromCart}
              checkOut={checkOut}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route path="/login" element={<Loginpage cartItems={cartItems} />} />
        <Route
          path="/registration"
          element={<Registrationpage cartItems={cartItems} />}
        />
        <Route
          path="/all-products"
          element={
            <Allproductspage
              cartItems={cartItems}
              allProductsData={allProductsData}
              addToCart={addToCart}
            />
          }
        />
        <Route
          path="/all-products/:id"
          element={
            <Singleproductpage
              cartItems={cartItems}
              allProductsData={allProductsData}
              addToCart={addToCart}
            />
          }
        />
        {/* Catch-all route for 404 errors */}
        <Route path="*" element={<ErrorNotFound cartItems={cartItems} />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
