import React from 'react';
import rover from './Images/rover.jpg';

function About() {
  return (
    <div>
      <img className="rover" src={rover} alt="" />

      <h1>About</h1>
      <p>
        The Astronomy Picture of the Day, or APOD, is one of NASA's most popular
        public API's. In the link "APOD" above you can see today's image along
        with the title and explanation.
      </p>
      <h2>Query a Specific Date</h2>
      <p>
        According to the documentation, the API has been maintained since late
        June of 1995 (1995-06-29)! In order to search for a specific date please
        use the YYYY-MM-DD format, otherwise it will return an error.
      </p>
      <span className="roverCred">Image by ArtTower</span>
    </div>
  );
}

export default About;
