import React from 'react';

import Movie from './Components/Movie-Component/Movie.component';
import Images from './Components/Image-Component/Images.component'
import About from './Components/About/About.component'
import Search from './Components/Search-Results/SearchResults.component'

import { Switch, Route } from 'react-router-dom'


import './index.css'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Movie} />
        <Route exact path='/images' component={Images} />
        <Route path='/about' component={About}/>
        <Route path='/search' component={Search} />
      </Switch>
    </div>
  );
}

export default App;
