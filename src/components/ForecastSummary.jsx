import React from 'react';
import WeatherIcon from 'react-icons-weather';
import moment from 'moment';

const ForecastSummary = props => {
  return (
    <>
      <p>{moment().format('ddd Do MMM')}</p>
      <WeatherIcon name="owm" iconId={props.icon} />
      <p>{props.description}</p>
      <p>{props.temperature}</p>
    </>
  );
};
ForecastSummary.propTypes = {
  /* date: PropTypes.date.isRequired, 
  temperature: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  /* icon: PropTypes.icon.isRequired, */
};

export default ForecastSummary;
