import React from 'react';

function SearchResults(props) {
  //console.log(props.image);
  return (
    <div className="searchResults">
      {/* {props.image.map(item => (
        <div key={item.name}>
          <img src={item.image.hdurl} />
        </div>
      ))} */}
      {/* <img src={props.image.hdurl} /> */}
    </div>
  );
}

export default SearchResults;
