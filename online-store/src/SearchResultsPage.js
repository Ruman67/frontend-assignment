import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SearchResultsPage = () => {
  const { searchTerm } = useParams();
  const [image, setImage] = useState(null);

  useEffect(() => {
    const url = `https://fakestoreapi.com/products?name=${searchTerm}`;
    console.log("API URL:", url);
  
    axios
      .get(url)
      .then((response) => {
        console.log("API Response:", response.data);
        const products = response.data;
        if (products.length > 0) {
          setImage(products[0].image);
        } else {
          setImage(null);
        }
      })
      .catch((error) => {
        console.error("API Error:", error);
        setImage(null); // Handle the error by setting image to null
      });
  }, [searchTerm]);
  
  return (
    <div>
      {image && (
        <img
          src={image}
          alt={`Search Results for ${searchTerm}`}
          style={{ width: "100%", height: "auto" }}
        />
      )}
    </div>
  );
};

export default SearchResultsPage;