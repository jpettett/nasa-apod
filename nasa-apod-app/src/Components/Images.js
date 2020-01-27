import React, { useState, useEffect } from 'react';
//import SearchResults from './SearchResults';

function Images() {
  const searchParams = {
    key: process.env.MARS_ROVER_EXPLORER_NASA_KEY,

    api: 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'
  };

  const [nasaImages, setImages] = useState([]);

  function getImages() {
    const url = `${searchParams.api}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setImages(data);
      })
      .catch(console.error);
  }

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div>
      <p>{nasaImages.explanation}</p>
      <img src={nasaImages.hdurl} alt="" />
    </div>
  );
}

export default Images;
