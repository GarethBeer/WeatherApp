/* eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import LocationDetails from '../Location-Details/location-details';
import ForecastSummaries from '../Forecast-Summaries/Forecast-Summaries';
import ForecastDetails from '../Forecast-Details/Forecast-Details';
import SearchForm from '../Search-Form/SearchForm';

import './app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ' ',
      selectedDate: 0,
      forecasts: [],
      location: {
        city: '',
        country: '',
      },
      image: '',
    };
  }

  componentDidMount() {
    axios.get(`https://mcr-codes-weather.herokuapp.com/forecast?city=Wrexham`).then(data => {
      this.setState({
        location: data.data.location,
        forecasts: data.data.forecasts,
        image: data.data.forecasts[0].description,
      });
    });
  }

  handleSubmit = () => {
    axios
      .get(`https://mcr-codes-weather.herokuapp.com/forecast?city=${this.state.searchText}`)
      .then(data => {
        console.log(data);
        this.setState({
          location: data.data.location,
          forecasts: data.data.forecasts,
          image: data.data.forecasts[0].description,
        });
      });
  };

  handleForecastSelect = date => {
    this.setState({
      selectedDate: date,
    });
  };

  handleInputChange = event => {
    this.setState({
      searchText: event.target.value,
    });
  };

  render() {
    const selectedForecast = this.state.forecasts.find(
      forecast => forecast.date === this.state.selectedDate,
    );

    return (
      <section className={this.state.image}>
        <header className="header">
          <LocationDetails city={this.state.location.city} country={this.state.location.country} />

          <SearchForm
            handleInputChange={this.handleInputChange}
            searchText={this.state.searchText}
            handleSubmit={this.handleSubmit}
          />
        </header>
        <ForecastSummaries
          forecasts={this.state.forecasts}
          onForecastSelect={this.handleForecastSelect}
        />
        {selectedForecast && <ForecastDetails forecasts={selectedForecast} />}
      </section>
    );
  }
}
App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  forecasts: PropTypes.array.isRequired,
};
export default App;
