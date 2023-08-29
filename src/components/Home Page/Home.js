import React from 'react'
import AllPlaces from './AllPlaces'
import OtherCities from './OtherCities'
import Navigation from '../Navigation Bar/Navigation'

function Home() {
  return (
    <div>
        <Navigation></Navigation>
      <div>
        <AllPlaces></AllPlaces>
      </div>
      <div>
        <OtherCities></OtherCities>
      </div>
    </div>
  )
}

export default Home
