import React from 'react';
import { shallow, mount } from 'enzyme';
import ForecastSummaries from './Forecast-Summaries';

it('renders the forecast summaries', () => {
  const wrapper = mount(<ForecastSummaries />);
  const forecast = wrapper.find('.forecast-summaries');

  expect(forecast.exists()).toBeTruthy();
});
