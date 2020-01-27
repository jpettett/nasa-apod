import React from 'react';

function SearchForm() {
  return (
    <form>
      <input
        className="form"
        placeholder="YYYY-MM-DD"
        type="text"
        name="searchString"
      />
      <button className="form" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
