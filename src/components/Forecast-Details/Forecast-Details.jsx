import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import './forecastdetailsstyle.css';

const ForecastDetails = props => {
  const { forecasts } = props;
  return (
    <section className="forecastDetails">
      <h4 className="date">{moment(forecasts.date).format('ddd Do MMM')}</h4>
      <div className="container">
        <div className="temps">
          <p>Min Temp:</p>
          <p className="tempMin temp">{forecasts.temperature.min}°</p>
          <p>Max Temp:</p>
          <p className="tempMax temp">{forecasts.temperature.max}°</p>
        </div>
        <div className="winds">
          <p>Wind Speed:</p>
          <p className="windSpeed wind">{forecasts.wind.speed}</p>
          <p>Wind Direction:</p>
          <p className="windDir wind">{forecasts.wind.direction.split('').map(el => `${el}.`)}</p>
        </div>
      </div>
    </section>
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
