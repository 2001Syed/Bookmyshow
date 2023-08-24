import React, { useState } from 'react'
import "./Courasel.css"

const imagescourasel = [
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1692706486089_spidermendesktop.jpg","https://assets-in.bmscdn.com/promotions/cms/creatives/1690628905918_webbannernpa.jpg","https://assets-in.bmscdn.com/promotions/cms/creatives/1692770491661_lollapaloozadateddesktop.jpg","https://assets-in.bmscdn.com/promotions/cms/creatives/1691130965445_wwesuperstardesktop.jpg"
]
function Courasel() {

    let [imgNo, setimgNo] = useState(0);
  return (
    <div>
      <div style={{display:"flex", justifyContent:"center"}} className='couraseldiv'>
        <button onClick={() => {
            imgNo == 0 ? setimgNo(imgNo = 3):setimgNo(imgNo - 1);
        }} className='prev'>&#8249;&#8249;</button>
        <img src={imagescourasel[imgNo]} alt=""  />
        <button onClick={() => {
            imgNo == 3 ? setimgNo(imgNo = 0):setimgNo(imgNo + 1);
        }} className='next'>&#8250;&#8250;</button>
      </div>
    </div>
  )
}

export default Courasel
