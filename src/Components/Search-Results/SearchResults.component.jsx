import React, { useState, useEffect } from 'react';
import SearchForm from '../Search-Form/SearchForm.component'

function SearchResults() {
  // object for search parameters //
  const searchParams = {
    key: process.env.REACT_APP_NASA_KEY,
    api: 'https://api.nasa.gov/planetary/apod',
    endpoint: 'date='
  };

  // add/update state with useState hooks //
  const [image, setImage] = useState([]);
  const [searchString, setSearch] = useState();

  //lifecycle method useEffect//
  useEffect(() => {
    fetchData();
  }, []);

  function fetchData(searchString) {
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
    fetchData(searchString);
  }
  return (
    <div className="searchResults">
      <p className="instrucitons">
        Please Enter a Date in the YYYY-MM-DD format.
      </p>
      <p>Example: 2020-01-20</p>
      <SearchForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        searchString={searchString}
      />
      <h2>{image.title}</h2>
      <p>{image.date}</p>
      <p>{image.explanation}</p>
      <img className="searchImage" src={image.hdurl} alt="" />
    </div>
  );
}

export default SearchResults;
