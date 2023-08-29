import React from 'react'
import Places from './Places'

import "./AllPlaces.css"

function AllPlaces() {

    let selectplaces = [
        {
          placeImage: "https://in.bmscdn.com/m6/images/common-modules/regions/mumbai.png",
          placeName: "Mumbai"
        },
        {
          placeImage: "https://in.bmscdn.com/m6/images/common-modules/regions/ncr.png",
          placeName: "Delhi-NCR"
        },
        {
          placeImage: "https://in.bmscdn.com/m6/images/common-modules/regions/bang.png",
          placeName: "Bangalore"
        },
        {
          placeImage: "https://in.bmscdn.com/m6/images/common-modules/regions/hyd-selected.png",
          placeName: "Hyderabad"
        },
        {
          placeImage: "https://in.bmscdn.com/m6/images/common-modules/regions/ahd.png",
          placeName: "Ahmedabad"
        },
        {
          placeImage: "https://in.bmscdn.com/m6/images/common-modules/regions/chd.png",
          placeName: "Chattisgarh"
        },
        {
          placeImage: "https://in.bmscdn.com/m6/images/common-modules/regions/chen.png",
          placeName: "Chennai"
        },
        {
          placeImage: "https://in.bmscdn.com/m6/images/common-modules/regions/pune.png",
          placeName: "Pune"
        },
        {
          placeImage: "https://in.bmscdn.com/m6/images/common-modules/regions/kolk.png",
          placeName: "Kolkata"
        },
        {
          placeImage: "https://in.bmscdn.com/m6/images/common-modules/regions/koch.png",
          placeName: "Kochi"
        }
        
      ]

  return (
    <div>
      <div className='places scss'>{
        selectplaces.map((i) => {
          return (
            <Places pImg = {i.placeImage} pName = {i.placeName}></Places>
          )
        })
        }
      </div>
    </div>
  )
}

export default AllPlaces