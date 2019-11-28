import React from 'react';
import { shallow } from 'enzyme';
import ForecastSummary from './ForecastSummary';
import setup from '../../setup';

xit('renders the date', () => {
  const wrapper = shallow(
    <ForecastSummary
      date="mockDate"
      temperature="mockTemperature"
      description="mockDescription"
      icon="mockIcon"
    />,
  );

  expect(wrapper.find('.date').text()).toEqual('mockDate');
});

it('renders the temperature', () => {
  const wrapper = shallow(
    <ForecastSummary
      date="mockDate"
      temperature="mockTemperature"
      description="mockDescription"
      icon="mockIcon"
    />,
  );

  expect(wrapper.find('.temperature').text()).toEqual('mockTemperature');
});

it('renders the description', () => {
  const wrapper = shallow(
    <ForecastSummary
      date="mockDate"
      temperature="mockTemperature"
      description="mockDescription"
      icon="mockIcon"
    />,
  );

  expect(wrapper.find('.description').text()).toEqual('mockDescription');
});

xit('renders the icon', () => {
  const wrapper = shallow(
    <ForecastSummary
      date="mockDate"
      temperature="mockTemperature"
      description="mockDescription"
      icon="mockIcon"
    />,
  );

  expect(wrapper.props('icon')).toEqual('mockIcon');
});
