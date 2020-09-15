import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../Header/header.component'

import BackgroundMovie from '../../Video/explore.mov'

import './movie.styles.scss'





const Movie = () => {
  return (
    <div>
      <Link
        style={{ textDecoration: 'none' }}
        to='/images'
      >
        <Header />
      </Link>
      <video className="videoTag" autoPlay loop muted>
      <source src={BackgroundMovie} type="video/mp4" />
    </video>
    </div>
    
  );
    }
  
  


export default Movie; 