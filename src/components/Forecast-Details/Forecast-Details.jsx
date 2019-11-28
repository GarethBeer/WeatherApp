import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import './forecastdetailsstyle.css';

const ForecastDetails = props => {
  return (
    <div className="forecastDetails">
      <h4 className="date">{moment(props.forecasts.date).format('ddd Do MMM')}</h4>
      <p>Min Temp:</p>
      <span className="tempMin" className="temp">
        {props.forecasts.temperature.min}
°
</span>
      <p>Max Temp:</p>
      <span className="tempMax" className="temp">
        {props.forecasts.temperature.max}
°
</span>
      <p>Wind Speed:</p>
      <span className="windSpeed">
        {props.forecasts.wind.speed}
        mph
      </span>
      <p>Wind Direction:</p>
      <span className="windDir">{props.forecasts.wind.direction}</span>
    </div>
  );
};

ForecastDetails.propTypes = {
  forecasts: PropTypes.shape({
    date: PropTypes.number,
    temperature: PropTypes.object,
    wind: PropTypes.object,
  }).isRequired,
};
export default ForecastDetails;
