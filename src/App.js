import React from 'react'
import "./App.css"
import Navigation from './components/Navigation Bar/Navigation'
import Courasel from "./components/Hyderabad/Courasel"
import Footer from "./components/Footer/Footer"
import AllPlaces from './components/Home Page/AllPlaces'
import OtherCities from './components/Home Page/OtherCities'
import Allmovies from './components/Hyderabad/Allmovies'

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <div>
        <AllPlaces></AllPlaces>
      </div>
      <div>
        <OtherCities></OtherCities>
      </div>
      <div className="courasel">
        <Courasel></Courasel>
      </div>
      <div>
        <Allmovies></Allmovies>
      </div>
      <div>
        <Footer></Footer>
      </div>    
    </div>
  )
}

export default App
