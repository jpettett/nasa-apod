import React from 'react';

import Nav from '../Nav/Nav.component'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


import './about.styles.scss'

function About() {
  return (
    <div>
        <Nav />
      <div className="about-header">
        <div className="overlay-div">
        <FontAwesomeIcon className="fa-icon" icon={faChevronDown} />
      </div>
      </div>
      <div className="about-page">
        <h1>About</h1>
        <p>
          The Astronomy Picture of the Day, or APOD, is one of NASA's most
          popular public API's. In the link "Today" above you can see today's
          image along with the title and explanation.
        </p>
        <h1>Query a Specific Date</h1>
        <p>
          According to the documentation, the API has been maintained since late
          June of 1995 (1995-06-29)! In order to search for a specific date
          please use the YYYY-MM-DD format, otherwise it will return an error.
        </p>
      </div>
    </div>
  );
}

export default About;

