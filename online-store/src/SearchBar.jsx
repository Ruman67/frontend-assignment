import React, { useState } from "react";
import { FcSearch } from "react-icons/fc";
import {  useNavigate } from "react-router-dom"; // Import useNavigate
import "./SearchBar.css";
import '/'
 const SearchBar = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate(); // Use useNavigate

  function handleSearch(e) {
    e.preventDefault();
    if (input.trim() !== "") {
      navigate(`/search-results/${input}`); // Use navigate to redirect to search results page
    }
  }

  return (
    <div className="input-wrapper">
      <FcSearch id="search-icon" />
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search Products here "
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
export default SearchBar;