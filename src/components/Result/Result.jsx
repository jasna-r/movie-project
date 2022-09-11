import React from 'react'

function Result({ result, openPopup }) {
  return (
    <div className="result" onClick={() => openPopup(result.imdbID)}>
        <img alt={result.Title} src={result.Poster} />
        <h3>{result.Title}</h3>
    </div>
  )
}

export default Result