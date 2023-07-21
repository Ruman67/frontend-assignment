import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // Import your CSS file (make sure the file path is correct)

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch the list of products from the API endpoint
    axios.get('https://fakestoreapi.com/products')
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
     
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img
              src={product.image}
              alt={product.title}
              className="product-image" // Apply the CSS class to the image element
            />
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;