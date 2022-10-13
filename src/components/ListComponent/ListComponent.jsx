import React from 'react'
import './ListComponent.css'

export const ListComponent = ({ isShow }) => {
  if(isShow)
  return ( 
    <div className="list-container">
      <div className='list-title'>
        <h4>List of random movies</h4>
        </div>
      
      
  </div>
  )
}

export default ListComponent;
