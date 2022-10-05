import React from "react";
import "./Popup.css"

function Popup( { selected, closePopup } ) {
  return (
    <div className="popup">
      <section>
        <div className="content">
            <h2>{selected.Title} <span>({selected.Year}) </span></h2>
            <p className="rating">Rating : {selected.imdbRating} </p>
            <div className="plot">
                <img alt={selected.Title} src={selected.Poster} /> 
                <p>{selected.Plot}</p>
            </div>
            <button className="close" onClick={closePopup}>&#215;   Close</button>
        </div>
      </section>
    </div>
  );
}

export default Popup;
