import React from 'react'
import "./App.css"
import Footer from "./components/Footer/Footer"
import Home from './components/Home Page/Home'
import Navigation from './components/Navigation Bar/Navigation'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Stream from './components/Home Page/Stream'
import Events from './components/Event/Events'
import Activities from './components/Activities/Activities'
import Buzz from './components/Buzz/Buzz'
import ICC from './components/ICC/ICC'
import ListYourShow from './components/ListYourShow/ListYourShow'
import Sports from './Sports/Sports'
import Places from "./components/Places/Places"
import Giftcard from './components/Giftcard/Giftcard'



function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>

          <Route path='/' element = {<Home></Home>}> </Route>
          <Route path='/stream' element = {<Stream></Stream>}></Route>
          <Route path='/event' element = {<Events></Events>}></Route>
          <Route path='/activities' element = {<Activities></Activities>}></Route>
          <Route path='/buzz' element = {<Buzz></Buzz>}></Route>
          <Route path='/icc' element = {<ICC></ICC>}></Route>
          <Route path='/listyourshow' element = {<ListYourShow></ListYourShow>}></Route>
          <Route path='/sports' element = {<Sports></Sports>}></Route>
          <Route path='/hyderabad' element = {<Places></Places>}></Route>
          <Route path='/giftcard' element = {<Giftcard></Giftcard>}></Route>
        </Routes>
      <Footer></Footer>
      </BrowserRouter>
      
      {/* <div>
        <Allmovies></Allmovies>
      </div> */}
      <div>
      </div>    
    </div>
  )
}

export default App
