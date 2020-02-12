import React from 'react';
import Header from './Header';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import './App.css';
import TvShows from './TvShows';
import Movies from './Movies';
import Latest from './Latest';
import MyList from './MyList';
import ReferFriends from './ReferFriends';
import Kids from './Kids';
import Dvd from './Dvd';
import Billboard from './Billboard';

function App() {
  return (
    <div className="App">
    <Header/>
    <Switch>
<Route exact path='/browse' component={Home} />
<Route exact path='/genre/83' component={TvShows} />
<Route exact path='/34399' component={Movies} />
<Route exact path='/latest' component={Latest} />
<Route exact path='/my-list' component={MyList} />

<Route exact path='/refer-friends' component={ReferFriends} />
<Route exact path='/kids' component={Kids} />
<Route exact path='/Subscribe/EnableDvd/Address?dsrc=STRWEB_NAV' component={Dvd} />

</Switch>
<Billboard/>
    </div>
  );
}

export default App;
