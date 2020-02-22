import React from 'react';

import ForecastSummary from '../Forecast-Summary/ForecastSummary';

import './forecast-summaries.css';

const ForecastSummaries = props => {
  const { forecasts, onForecastSelect, selectedForecast, width } = props;

  return (
    <section className="forecast-summaries">
      {forecasts.map(forecast => (
        <ForecastSummary
          key={forecast.date}
          date={forecast.date}
          description={forecast.description}
          icon={forecast.icon}
          temperature={forecast.temperature.max}
          onSelect={onForecastSelect}
          width={width}
          day={selectedForecast}
        />
      ))}
    </section>
  );
};

export default ForecastSummaries;
