import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
    return (
      <div>
        <h1>
          <span className="nasa">NASA </span>- Astronomy Picture of the Day
        </h1>
        <Link className="links" to="/">
          Home
        </Link>
        <Link className="links" to="/about">
          About
        </Link>
        <Link className="links" to="/images">
          Picture of the Day
        </Link>
        <Link className="links" to="/search">
          Search
        </Link>
      </div>
    );
}

export default Nav;