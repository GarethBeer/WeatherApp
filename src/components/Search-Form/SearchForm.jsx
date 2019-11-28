import React from 'react';
import './searchformstyle.css';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ' ',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      searchText: event.target.value,
    });
  }

  render() {
    return (
      <div className="searchForm">
        <input type="text" onChange={this.handleInputChange} value={this.state.searchText} />
        <button>Search</button>
      </div>
    );
  }
}

export default SearchForm;
