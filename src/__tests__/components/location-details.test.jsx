import React from 'react';
import { shallow } from 'enzyme';
import LocationDetails from '../components/Location-Details/location-details';

test('testing component outputs a string', () => {
  const wrapper = shallow(<LocationDetails city="foo" country="bar" />);

  const h1 = wrapper.find('h1').text();

  expect(h1).toBe('foo, bar');
});
