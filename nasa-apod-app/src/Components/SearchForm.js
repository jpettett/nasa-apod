import React from 'react';
//import { Link, Route } from 'react-router-dom';
//import SearchResults from './SearchResults';

function SearchForm(props) {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input
          onChange={props.handleChange}
          value={props.searchString}
          className="form"
          placeholder="YYYY-MM-DD"
          type="text"
          name="searchString"
        />

        <button className="form" type="submit">
          Search
        </button>
      </form>
      {/* <Route path="/search" component={SearchResults} /> */}
    </div>
  );
}

export default SearchForm;
