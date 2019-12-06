import React from 'react';
import ForecastSummary from '../Forecast-Summary/ForecastSummary';

import './forecast-summaries.css';

const ForecastSummaries = props => {
  return (
    <section className="forecast-summaries">
      {props.forecasts.map(forecast => (
        <ForecastSummary
          key={forecast.date}
          date={forecast.date}
          description={forecast.description}
          icon={forecast.icon}
          temperature={forecast.temperature.max}
          onSelect={props.onForecastSelect}
        />
      ))}
    </section>
  );
};

export default ForecastSummaries;
