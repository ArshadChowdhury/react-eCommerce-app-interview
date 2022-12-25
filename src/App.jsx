import Header from "./components/Header/Header";
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { useState } from "react";
import Data from "./components/FlashDeals/flashDealsData";
import Cart from "./components/Cart/Cart"

function App() {
  const {productItems} = Data;
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    const productExists = cartItems.find((item) => item.id === product.id);
    if (productExists) {
      setCartItems(cartItems.map((item) => (item.id === product.id ? { ...productExists, qty: productExists.qty + 1 } : item)))
    } else{
      setCartItems([...cartItems, {...product,qty:1}])
    }
  }
  const deleteFromCart = (product) =>{
    const productExists = cartItems.find((item) => item.id === product.id);
    if (productExists.qty === 1) {
      setCartItems(cartItems.filter((item) => (item.id !== product.id)))
    } else{
      setCartItems(cartItems.map((item) => (item.id === product.id ? { ...productExists, qty: productExists.qty - 1 } : item)))
    }

  }


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header flashDealsData={productItems} cartItems={cartItems} addToCart={addToCart}/>}/>
        </Routes>
        <Routes>
          <Route path="/cart" element={<Cart cartItems={cartItems} addToCart={addToCart} deleteFromCart={deleteFromCart} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
