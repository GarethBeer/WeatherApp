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
      selectedDate: 0,
      forecasts: [],
      location: {
        city: '',
        country: '',
      },
    };
    this.handleForecastSelect = this.handleForecastSelect.bind(this);
  }

  componentDidMount() {
    axios.get(`https://mcr-codes-weather.herokuapp.com/forecast?city=London`).then(data => {
      this.setState({
        location: data.data.location,
        forecasts: data.data.forecasts,
      });
    });
  }

  handleForecastSelect(date) {
    this.setState({
      selectedDate: date,
    });
  }

  render() {
    const selectedForecast = this.state.forecasts.find(
      forecast => forecast.date === this.state.selectedDate,
    );
    return (
      <div className="forecast">
        <LocationDetails city={this.state.location.city} country={this.state.location.country} />
        <SearchForm />
        <ForecastSummaries
          forecasts={this.state.forecasts}
          onForecastSelect={this.handleForecastSelect}
        />
        {selectedForecast && <ForecastDetails forecasts={selectedForecast} />}
      </div>
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
