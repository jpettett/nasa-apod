import React from 'react';

import { Link } from 'react-router-dom';

import './nav.styles.scss'


function Nav() {
    return (
      <div className="nav">
        <Link className="links" to="/about">
          About
        </Link>
        <Link className="links" to="/search">
          Search
        </Link>
      </div>
    );
}

export default Nav;