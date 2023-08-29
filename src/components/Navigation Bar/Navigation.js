import React from 'react'
import "./Navigation.css"
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <div className='navbar-div'>
      <nav className='navbar'>
                <div className='right'>
                    <Link to='/'>
                        <img src="https://in.bmscdn.com/webin/common/icons/logo.svg" alt="" />
                    </Link>

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
                    <a href="">Movies</a>
                    <Link to='/stream'>
                        <a href="">Stream</a>
                    </Link>
                    <Link to='/event'>
                        <a href="">Events</a>
                    </Link>
                    <a href="">Plays</a>
                    <a href="">Sports</a>
                    <Link to='/activities'>
                        <a href="">Activities</a>
                    </Link>
                    <Link to='/buzz'>
                        <a href="">Buzz</a>
                    </Link>
                    <Link to='icc'>
                        <a href=""><img src="https://assets-in.bmscdn.com/static/2023/08/cwc23.png" alt="" width={"250px"} /></a>
                    </Link>
                </div>

                <div className="menuleft">
                    <Link to='listyourshow'>
                        <a href="">ListYourShow</a>
                    </Link>
                    <a href="">Corporates</a>
                    <a href="">Offers</a>
                    <a href="">Gift Cards</a>

                </div>
            </div>
    </div>
  )
}

export default Navigation
