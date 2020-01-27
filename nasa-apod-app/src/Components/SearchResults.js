import React from 'react';

function SearchResults(props) {
  return (
    <div>
      {props.marsImages.map(image => (
        <div key={image.name}>
          <img src={image.img_src} alt={image.name} />
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
