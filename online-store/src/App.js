import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Home";
import ProductDetails from "./ProductDetails";
import SearchBar from "./SearchBar";
import Cart from "./Cart"; // Import the Cart component

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <div className="App">
        
        <div className="Search-bar container">
          <SearchBar />
        </div>

        <div className="welcome-section">     
       <center><h2 className="welcome-text">Welcome to Our Online Store!</h2></center>
        <div className="quote-box"> 
        <p className="quote">"The best products, just for you."</p>
         </div>
       </div>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home cart={cart} setCart={setCart} />}
          />
          <Route path="/product/:productId" element={<ProductDetails />} />
          {/* Add a route for the Cart component */}
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;