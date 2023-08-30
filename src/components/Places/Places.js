import React from 'react'
import "./Places.css"
import OtherCities from './OtherCities'

const places = [
  {
    placesimg: "https://in.bmscdn.com/m6/images/common-modules/regions/mumbai.png",
    placesname: "Mumbai"
  },
  {
    placesimg : "https://in.bmscdn.com/m6/images/common-modules/regions/ncr.png",
    placesname : "Delhi NCR"
  },
  {
    placesimg : "https://in.bmscdn.com/m6/images/common-modules/regions/bang.png",
    placesname : "Bengaluru"
  },
  {
    placesimg : "https://in.bmscdn.com/m6/images/common-modules/regions/hyd-selected.png",
    placesname : "Hyderabad"
  },
  {
    placesimg : "https://in.bmscdn.com/m6/images/common-modules/regions/ahd.png",
    placesname: "Ahmedabad"
  },
  {
    placesimg : "https://in.bmscdn.com/m6/images/common-modules/regions/chd.png",
    placesname : "Chandigarh"
  },
  {
    placesimg : "https://in.bmscdn.com/m6/images/common-modules/regions/chen.png",
    placesname : "Chennai"
  },
  {
    placesimg : "https://in.bmscdn.com/m6/images/common-modules/regions/pune.png",
    placesname : "Pune"
  },
  {
    placesimg : "https://in.bmscdn.com/m6/images/common-modules/regions/kolk.png",
    placesname : "Kolkata"
  },
  {
    placesimg : "https://in.bmscdn.com/m6/images/common-modules/regions/koch.png",
    placesname : "Kochi"
  }

]

function Places() {
  return (
    <div>
      <div className='places-div'>
        {
          places.map((x) => {
            return (
              <div className='places-container'>
                <img src={x.placesimg} alt="" className='places-img'/>
                <p className='places-name'>{x.placesname}</p>
              </div>
            )

          })
        }
      </div>

      <div>
        <OtherCities></OtherCities>
      </div>
    </div>
  )
}

export default Places
