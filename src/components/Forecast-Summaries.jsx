import React from 'react';
import ForecastSummary from './ForecastSummary';

import '../styles/forecast-summaries.css';

const ForecastSummaries = props => {
  return (
    <div className="forecast-summaries">
      {props.forecasts.map(forecast => (
        <ForecastSummary
          key={forecast.date}
          date={forecast.date}
          description={forecast.description}
          icon={forecast.icon}
          temperature={forecast.temperature.max}
        />
      ))}
    </div>
  );
};
export default ForecastSummaries;
