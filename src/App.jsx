import React , {useState} from "react";
import AllRoutes from "./allroutes/AllRoutes"
import FlashDealsData from "./components/FlashDeals/flashDealsData";
import ShopData from "./components/Shop/shopData";
import "./App.css";

function App() {
  const {productItems} = FlashDealsData;
  const {shopItems} = ShopData;
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

  const checkOut = (cartItems) =>{
      if(cartItems.length <= 0){
        alert("Add something to the cart first to checkout");
      } else {
        alert("Thanks for shopping with us, come back soon again");
      }
  }

  return (
    <>
    <AllRoutes productItems={productItems} cartItems={cartItems} addToCart={addToCart} shopItems={shopItems} deleteFromCart={deleteFromCart} checkOut={checkOut}/>
    </>
  )
}

export default App
