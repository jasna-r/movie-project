import React from "react";
import "./Search.css";

function Search({ handleInput, search }) {
  return (
    <div className="search-box-wrapper">
      <section>
        <input
          type="text"
          placeholder="Search for a movie..."
          className="searchbox"
          onChange={handleInput}
          onKeyPress={search}
        />
      </section>
    </div>
  );
}

export default Search;
