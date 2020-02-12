import React from 'react';
import logo from './logo.png'
import './Header.css'
import Suggestion from './Suggestion'
import { Link } from 'react-router-dom'

var netflixFont ={
  fontFamily: "'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  fontSize: "15px"
}

function Header(){
  return(
    <div className='header'>
    <div className='headerLeft'>
    <img className='logo' src={logo}></img>
    <Link to="/browse">Home</Link>  <Link to="/genre/83">TV Shows</Link>  <Link to="/34399">Movies</Link>  <Link to="/latest">Latest</Link>  <Link to="/my-list">My List</Link>
    </div>

    <div className='headerRight'>
    <form>

    <input type='text' name='search' className='extand' placeholder='🔍  Titles, people, genres'/>
    <span className='searchBox' aria-hidden='true' ></span>

    </form>

    <Link to="/kids" style={netflixFont}>KIDS</Link>
    <Link to="/Subscribe/EnableDvd/Address?dsrc=STRWEB_NAV" style={netflixFont}>DVD</Link>
    <Link to="/refer-friends">🎁</Link>
    <div className='suggestionDrop'>
    <button className='dropdown'>🛎</button>
    <div className='dropdown-content'>
    <li>test</li>
    <Suggestion/>
    </div>
    </div>
    <button>🚼</button>
    </div>
    </div>
  );
}

export default Header
