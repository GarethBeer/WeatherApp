import React from 'react';
import { shallow, mount } from 'enzyme';
import { parseZone } from 'moment';
import ForecastSummary from './ForecastSummary';

xit('renders the date', () => {
  const wrapper = shallow(
    <ForecastSummary
      date="mockDate"
      temperature="mockTemperature"
      description="mockDescription"
      icon="mockIcon"
    />,
  );

  expect(wrapper.find('.date').text()).toBe('mockDate');
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

it('it renders a button', () => {
  const wrapper = shallow(<ForecastSummary />);
  const button = wrapper.find('button');

  expect(button.exists()).toBe(true);
});

it('upon clicking button expect the onSelect handler to be called', () => {
  const props = {
    onSelect: jest.fn(),
    date: 'date',
  };

  const wrapper = shallow(<ForecastSummary {...props} />);

  wrapper.find('button').simulate('click');

  expect(props.onSelect).toHaveBeenCalled();
  expect(props.onSelect).toHaveBeenCalledTimes(1);
  expect(props.onSelect).toHaveBeenCalledWith(props.date);
});
