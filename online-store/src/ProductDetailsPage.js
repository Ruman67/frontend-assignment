import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './ProductDetails';
const ProductDetailsPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    // Fetch the product details from the API endpoint
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error(error));
  }, [productId]);

  return (
    <div>
      <h2>Product Details</h2>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      {/* Add other product details here */}
    </div>
  );
};

export default ProductDetailsPage;