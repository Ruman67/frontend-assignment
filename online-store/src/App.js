import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";
import ProductDetails from "./ProductDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="Search-bar container">
          <div>SearchBar</div>
          <div>
          SearchResults
          </div>
        </div>
       
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/product/:productId" component={ProductDetails} />
        </Routes>
        <Home/>
      </div>
    </Router>
  );
};

export default App;