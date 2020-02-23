import React from 'react';
import { shallow } from 'enzyme';
import App from './app';

it('renders ', () => {
  const wrapper = shallow(<App />);
  const header = wrapper.find('.header');

  expect(header.exists()).toBeTruthy();
});
