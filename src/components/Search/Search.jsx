import React from "react";
import "./Search.css";

function Search({ handleInput, search }) {
  return (
    <div className="search-box-container">
      <input
        className="search-box"
        type="text"
        placeholder="&#x1F50E;&#xFE0E;  Search for a movie..."
        onChange={handleInput}
        onKeyPress={search}
        />
    </div>
  );
}

export default Search;
