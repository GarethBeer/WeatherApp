import React from 'react';

const ForecastSummary = props => {
  return (
    <>
      <p>{props.date}</p>
      <p>{props.icon}</p>
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
