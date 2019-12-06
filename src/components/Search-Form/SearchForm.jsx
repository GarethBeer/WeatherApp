import React from 'react';
import './searchformstyle.css';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { handleSubmit, handleInputChange } = this.props;
    return (
      <div className="searchForm">
        <input type="text" onChange={handleInputChange} value={this.props.searchText} />
        <button onClick={handleSubmit}>Search</button>
      </div>
    );
  }
}

export default SearchForm;
