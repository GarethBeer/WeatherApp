import React from 'react';
import WeatherIcon from 'react-icons-weather';
import moment from 'moment';
import PropTypes from 'prop-types';

const ForecastSummary = props => {
  const { date, icon, description, temperature } = props;

  return (
    <div className="weatherCards">
      <p className="date">{moment(date).format('ddd Do MMM')}</p>
      <WeatherIcon name="owm" iconId={icon} />
      <p className="description">{description}</p>
      <p className="temperature">{temperature}</p>
      <button onClick={() => props.onSelect(date)}>More Details</button>
    </div>
  );
};
ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  temperature: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default ForecastSummary;
