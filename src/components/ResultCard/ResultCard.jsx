import React from 'react'
import "./ResulsCard.css"
import Result from '../Result/Result'

function ResultCard({ results, openPopup }) {
  return (
    <div >
        <section className='result-card'>
            {results.map(result => (
                <Result key={result.imdbID} result={result} openPopup={openPopup}/>
            ))}
        </section>
    </div>
  )
}

export default ResultCard