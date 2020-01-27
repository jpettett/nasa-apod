import React, { useState, useEffect } from 'react';

function Images() {
  const [nasaImage, setImage] = useState([]);

  function getImages() {
    const key = process.env.NASA_KEY;
    const url = `https://api.nasa.gov/planetary/apod?api_key=${key}`;
    console.log({ key });
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setImage(data);
      })
      .catch(console.error);
  }

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div>
      <p>{nasaImage.explanation}</p>
      <img src={nasaImage.hdurl} alt="" />
    </div>
  );
}

export default Images;
