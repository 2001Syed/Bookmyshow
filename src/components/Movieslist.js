import React from 'react'
import "./Movieslist.css"

function Movieslist({mImg, mName, mLang}) {
  return (
    <div className='container'>
        <div className='card'>
            <img src={mImg} alt="" width={"203.490px"}/>
            <p className='moviename'>
                {mName}
            </p>
            <p className="rating ptag">
                UA
            </p>
            <p className='language ptag'>
                {mLang}
            </p>
        </div>
    </div>
  )
}

export default Movieslist
