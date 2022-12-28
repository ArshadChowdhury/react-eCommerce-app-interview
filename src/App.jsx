import React , {useState} from "react";
import AllRoutes from "./allroutes/AllRoutes";
import FlashDealsData from "./components/FlashDeals/flashDealsData";
import ShopData from "./components/Shop/shopData";
import AllProductsData from "./components/Allproducts/allProductsData";
import './App.css';

function App() {
  // pulling data from data files & storing it in variables here
  const {productItems} = FlashDealsData;
  const {shopItems} = ShopData;
  const {allProductsData} = AllProductsData;
  // using useState hooks to change and store items in  the cart here
  const [cartItems, setCartItems] = useState([]);
  // This is a function to add items in the cart it takes the product and checks within the cart to see if there's already added in cart
  // if it already has it it increases the quantity by 1 with each click, if it doesn't exist in cart it adds it to the cart
  const addToCart = (product) => {
    const productExists = cartItems.find((item) => item.id === product.id);
    if (productExists) {
      setCartItems(cartItems.map((item) => (item.id === product.id ? { ...productExists, qty: productExists.qty + 1 } : item)))
    } else{
      setCartItems([...cartItems, {...product,qty:1}])
    }
  }
  // This is a function to delete items from the cart, it takes the product and checks within the cart to see if it is already in cart
  // if it has the item it decreases the quantity by 1 with each click, if it has less than 1 number of item it removes entirely from the cart
  const deleteFromCart = (product) =>{
    const productExists = cartItems.find((item) => item.id === product.id);
    if (productExists.qty === 1) {
      setCartItems(cartItems.filter((item) => (item.id !== product.id)))
    } else{
      setCartItems(cartItems.map((item) => (item.id === product.id ? { ...productExists, qty: productExists.qty - 1 } : item)))
    }

  }
  // This function is used for the checkout button it takes cartItems as input and if the length of items in it is 0 it alerts add something to cart first 
  const checkOut = (cartItems) =>{
      if(cartItems.length <= 0){
        alert("Add something to the cart first to checkout");
      } else {

        // but if it has items in it thn it alerts saying thanks for shopping with us
        for(let i=0; i<cartItems.length; i++){
          cartItems.splice(0, cartItems.length);
        }
        setCartItems(cartItems.map((item) => item))
        alert("Thanks for shopping with us, come back soon again");
      }
  }

  // This function removes an item from the cart entirely, filtering out the values which doesn't have the same id as those clicked
  const removeFromCart =(product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id))
  }

  return (
    // All the functions are in App.jsx but we have to call these in other components as well so sending all these functions and datas as props to child elements so we can use them there
    <>
    <AllRoutes removeFromCart={removeFromCart} productItems={productItems} cartItems={cartItems} addToCart={addToCart} shopItems={shopItems} deleteFromCart={deleteFromCart} checkOut={checkOut} allProductsData={allProductsData}/>
    </>
  )
}

export default App;
