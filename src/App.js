import React from 'react';

import Movie from './Components/Movie-Component/Movie.component';

import Images from './Components/Image-Component/Images.component'

import { Switch, Route } from 'react-router-dom'


import './index.css'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Movie} />
        <Route exact path='/images' component={Images} />
      </Switch>
    </div>
  );
}

export default App;
