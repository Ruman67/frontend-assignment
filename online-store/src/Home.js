import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Home.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = ({ cart, setCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch the list of products from the API endpoint
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(error));
  }, []);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    toast.success(`${product.title} added to cart`, {
      position: "top-right",
      autoClose: 2000, // 2 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div>
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <Link to={`/product/${product.id}`}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
