import React, { useState } from 'react'

import "./OtherCities.css"

function OtherCities() {


    const citiesarray = [
        "Aola","Achampet","Adilabad","Agra","Ahmedgarh","Ahmednagar","Akola","Alibaug","Aligarh","Amritsar","Amravati","Andaman And Nicobar","Arambagh","Aurangabad","Azamgarh","Bihar","Bareilly","Basti","Bharatpur","Bhavnagar","Bhongir","Bhopal","Bhubaneshwar","Bhutan","Bichkunda","Bodhan","Chevella","Chikli","Devarakadra","Dholakpur","Gajwel","Goa","Gaziabad","Hampi","Kamareddy",]    

    // const [show,setShow] = useState(false)
  return (
    <div className='othercities-div'>
        {/* <div className='showbtn Cbtn'>
            <button className="showallcities btn-cities" onClick={()=>setShow(true)}>View All</button>
        </div> */}
      <div>
        <div className="other-cities">
          <p>Other Cities</p>
        </div>
        <div className='cities-names'>
          <ul className='cities-list'>
            {
                // citiesarray.map((x)=>{
                //     return show ? (<li>
                //         <div className='each-cName'>
                //             {x}
                //         </div>
                //     </li>) : null 
                // }
                // )

                citiesarray.map((x)=>{
                  return (<li>
                      <div className='each-cName'>
                          {x}
                      </div>
                  </li>)
              }
              
              )
            }
          </ul>
        </div>
      </div>
      {/* <div className='hidebtn Cbtn'>
        <button className="hideallcities btn-cities" onClick={()=>setShow(false)}>Hide All</button>
      </div> */}
    </div>
  )
}

export default OtherCities
