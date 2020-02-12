import React from 'react';
import Header from './Header';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import TvShows from './TvShows';
import Movies from './Movies';
import Latest from './Latest';
import MyList from './MyList';

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
</Switch>
    </div>
  );
}

export default App;
