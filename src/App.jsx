import Header from "./components/Header/Header";
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Pages from "./components/Pages/Pages";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([])
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/pages" element={<Pages />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
