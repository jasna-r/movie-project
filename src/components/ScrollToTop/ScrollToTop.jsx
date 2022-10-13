import React from 'react'
import "./ScrollToTop.css"

export const ScrollToTop = ({ scrollToTop }) => {
  return (
    <div className='scroll-container'>
        <button className='scroll-btn' onClick={scrollToTop}>&#11165;</button>
    </div>
   )
}

export default ScrollToTop