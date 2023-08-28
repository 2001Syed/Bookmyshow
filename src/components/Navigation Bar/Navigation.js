import React from 'react'
import "./Navigation.css"

function Navigation() {
  return (
    <div className='navbar-div'>
      <nav className='navbar'>
                <div className='right'>
                    <img src="https://in.bmscdn.com/webin/common/icons/logo.svg" alt="" />

                    <input type="text" name="" id="" placeholder='Search for movies here' />
                </div>
                <div className='left'>
                    <select name="" id="">
                        <option value="Hyderabad">Hyderabad</option>

                    </select>
                    <button>Sign in</button>
                </div>
            </nav>
     
            <div className="menu">
                <div className="rightmenu">
                    <a href="">movies</a>
                    <a href="">Stream</a>
                    <a href="">Events</a>
                    <a href="">Plays</a>
                    <a href="">Sports</a>
                    <a href="">Activities</a>
                    <a href="">Buzz</a>
                    <a href=""><img src="https://assets-in.bmscdn.com/static/2023/08/cwc23.png" alt="" width={"250px"} /></a>
                </div>

                <div className="menuleft">
                    <a href="">ListYourShow</a>
                    <a href="">Corporates</a>
                    <a href="">Offers</a>
                    <a href="">Gift Cards</a>

                </div>
            </div>
    </div>
  )
}

export default Navigation
