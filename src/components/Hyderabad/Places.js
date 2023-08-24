import React from 'react'
import "./Places.css"

function Places({pImg , pName}) {
  return (
    <div className='places-container'>
      <img src={pImg} alt="" className='places-img'/>
      <p className='places-name'>{pName}</p>
    </div>
  )
}

export default Places
