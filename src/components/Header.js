import React from 'react';
import logo from './logo.png'
import './Header.css'
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
    <button>🔍</button>
    <Link to="/kids" style={netflixFont}>KIDS</Link>
    <Link to="/Subscribe/EnableDvd/Address?dsrc=STRWEB_NAV" style={netflixFont}>DVD</Link>
    <Link to="/refer-friends">🎁</Link>
    <button>🛎</button>
    <button>🚼</button>
    </div>
    </div>
  );
}

export default Header
