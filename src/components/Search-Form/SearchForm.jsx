import React from 'react';
import PropTypes from 'prop-types';

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

SearchForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
};
export default SearchForm;
