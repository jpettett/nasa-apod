import React from 'react'
import BackgroundMovie from '../../Video/explore.mov'
import Header from '../Header/header.component'

import './movie.styles.scss'





const Movie = () => {
  return (
    <div>
      <video className="videoTag" autoPlay loop muted>
      <source src={BackgroundMovie} type="video/mp4" />
    </video>
    <Header />
    </div>
    
  );
    }
  
  


export default Movie; 