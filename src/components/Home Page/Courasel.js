import React, { useEffect, useState } from 'react'
import "./Courasel.css"

const imagescourasel = [
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1690628905918_webbannernpa.jpg","https://assets-in.bmscdn.com/promotions/cms/creatives/1693475544970_kickdesktop.jpg","https://assets-in.bmscdn.com/promotions/cms/creatives/1693390199847_asiansrinivasadesktop.jpg","https://assets-in.bmscdn.com/promotions/cms/creatives/1691130965445_wwesuperstardesktop.jpg"
]
function Courasel() {

    let [imgNo, setimgNo] = useState(0);
    let n = imagescourasel.length;

    useEffect(()=>{
      const interval = setInterval (()=>{
        setimgNo((imgNo + 1) % n);
      }, 3000);

      return ()=>{
        clearInterval(interval);
      }
    })

  return (
    <div>
      <div style={{display:"flex", justifyContent:"center"}} className='couraseldiv'>
        <button onClick={() => {
            imgNo == 0 ? setimgNo(imgNo = imagescourasel.length - 1):setimgNo(imgNo - 1);
        }} className='prev'>&#8249;&#8249;</button>
        <img src={imagescourasel[imgNo]} alt=""  />
        <button onClick={() => {
            imgNo == imagescourasel.length - 1 ? setimgNo(imgNo = 0):setimgNo(imgNo + 1);
        }} className='next'>&#8250;&#8250;</button>
      </div>
      <div className='icc-img1'>
        <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/icc-cwc-banner-collection-202308220156.png" alt=""/>
      </div>
    </div>
  )
}

export default Courasel
