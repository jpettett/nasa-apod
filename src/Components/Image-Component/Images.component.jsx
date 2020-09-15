import React, { useState, useEffect } from "react";

import Nav from '../Nav/Nav.component'

import './image.styles.scss'

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
      // catch and display error message //
      .catch(() => {
        console.error();
        setImage({
          title: 'Oops, looks like we failed to launch!',
          hdurl:
            'https://apod.nasa.gov/apod/image/1607/Falcon9SeeleyIMG_9801_1024c.jpg'
        });
      });
  }

  useEffect(() => {
    getImage();
  }, []);

  return (
    <div>
      <Nav />
    <div className="images">
      <h2 className="title">{nasaImage.title}</h2>
      <p className="date">{nasaImage.date}</p>
      <img className="apod" src={nasaImage.hdurl} alt="" />
      <p className="info">{nasaImage.explanation}</p>
    </div>
    </div>
  );
}

export default Images;
