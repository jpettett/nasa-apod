import React, { useState, useEffect } from 'react';

function Images() {
  const [nasaImage, setImage] = useState([]);

  function getImage() {
    const key = process.env.REACT_APP_NASA_KEY;
    const url = `https://api.nasa.gov/planetary/apod?api_key=${key}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setImage(data);
      })
      .catch(console.error);
  }

  useEffect(() => {
    getImage();
  }, []);

  return (
    <div>
      <h2>{nasaImage.title}</h2>
      <p>{nasaImage.date}</p>
      <p>{nasaImage.explanation}</p>
      <img className="apod" src={nasaImage.hdurl} alt="" />
    </div>
  );
}

export default Images;
