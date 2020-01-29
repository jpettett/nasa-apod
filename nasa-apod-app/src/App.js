import React, { useState, useEffect } from 'react';
import About from './Components/About';
import Home from './Components/Home';
import SearchForm from './Components/SearchForm';
import Images from './Components/Images';
// import SearchResults from './Components/SearchResults';
import { Link, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  // object for search parameters //
  const searchParams = {
    key: process.env.REACT_APP_NASA_KEY,
    api: 'https://api.nasa.gov/planetary/apod',
    endpoint: 'date='
  };

  // add state with useState hooks //
  const [image, setImage] = useState([]);
  const [searchString, setSearch] = useState();

  //lifecycle method useEffect//
  useEffect(() => {
    getImage();
  }, []);

  function getImage(searchString) {
    // const searchString = '2020-01-20';
    const url = `${searchParams.api}?api_key=${searchParams.key}&${searchParams.endpoint}${searchString}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setImage(data);
      })
      .catch(console.error);
  }

  // searchForm logic //
  function handleChange(event) {
    setSearch(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getImage(searchString);
  }

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
          Daily Image
        </Link>
        <SearchForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          searchString={searchString}
        />
      </nav>
      <main className="main">
        <Switch>
          <Route path="/images" component={Images} />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </main>
      <img className="searchImage" src={image.hdurl} alt="" />
    </div>
  );
}

export default App;
