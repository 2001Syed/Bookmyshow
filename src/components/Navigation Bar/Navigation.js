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
                <Link to='/hyderabad'>
                    <select name="" id="">
                            <option value="Hyderabad">Hyderabad</option>

                    </select>
                </Link>
                    <button>Sign in</button>
                </div>
            </nav>
     
            <div className="menu">
                <div className="rightmenu">
                    <Link to='/movies'>
                        <a href="">Movies</a>
                    </Link>
                    <Link to='/stream'>
                        <a href="">Stream</a>
                    </Link>
                    <Link to='/event'>
                        <a href="">Events</a>
                    </Link>
                    <Link to='./sports'>
                        <a href="">Sports</a>
                    </Link>
                    <Link to='/plays'>
                        <a href="">Plays</a>
                    </Link>
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
                    <Link to='./co-operate'>
                        <a href="">Corporates</a>
                    </Link>
                    <Link to="./offers">
                        <a href="">Offers</a>
                    </Link>
                    <Link to='./giftcard'>
                        <a href="">Gift Cards</a>
                    </Link>

                </div>
            </div>
    </div>
  )
}

export default Navigation
