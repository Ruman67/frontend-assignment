import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";
import ProductDetails from "./ProductDetails";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </nav>
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