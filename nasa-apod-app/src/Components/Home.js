import React from 'react';
import solar from './Images/solar-system.jpg';

function Home() {
  return (
    <div>
      <img className="planets" src={solar} alt="" />
      <p className="home">Welcome to NASA's Astronomy Picture of the Day!</p>
    </div>
  );
}

export default Home;
