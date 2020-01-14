import React from 'react';
import './searchformstyle.css';

const SearchForm = props => {
  const { handleSubmit, handleInputChange, searchText } = props;
  return (
    <div className="searchForm">
      <input
        type="text"
        name="input"
        onChange={handleInputChange}
        value={searchText}
        className="inputField"
      />
      <button onClick={handleSubmit} type="button">
        Search
      </button>
    </div>
  );
};

export default SearchForm;
