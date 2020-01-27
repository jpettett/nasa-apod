import React from 'react';
import About from './Components/About';
import Home from './Components/Home';
import SearchForm from './Components/SearchForm';
import Images from './Components/Images';
import { Link, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <nav className="navBar">
        <h1>
          <span className="nasa">NASA </span> Astronomy Picture of the Day
        </h1>
        <Link className="links" to="/">
          Home
        </Link>
        <Link className="links" to="/about">
          About
        </Link>
        <Link className="links" to="/images">
          Today
        </Link>
        <SearchForm />
      </nav>
      <main className="main">
        <Switch>
          <Route path="/images" component={Images} />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
