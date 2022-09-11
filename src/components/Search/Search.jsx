import React from "react";
import "./Search.css";

function Search({ handleInput, search }) {
  return (
    <div className="search-box-container">
      {/* <section> */}
        <input className="search-box"
          type="text"
          placeholder="Search for a movie..."
          onChange={handleInput}
          onKeyPress={search}
        />
      {/* </section> */}

    
    </div>

  );
}

export default Search;
