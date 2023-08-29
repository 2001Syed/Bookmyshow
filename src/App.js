import React from 'react'
import "./App.css"
import Courasel from "./components/Home Page/Courasel"
import Footer from "./components/Footer/Footer"
import Allmovies from './components/Hyderabad/Allmovies'
import Home from './components/Home Page/Home'

function App() {
  return (
    <div>
      <Home></Home>
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
