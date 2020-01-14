import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

it('it renders an input field', () => {
  const wrapper = shallow(<SearchForm />);
  const input = wrapper.find('input');

  expect(input.exists()).toBe(true);
});

test('the input field initialises empty', () => {
  const props = {
    searchText: '',
  };
  const wrapper = shallow(<SearchForm {...props} />);
  const input = wrapper.find('.inputField');

  expect(input.props().value).toBe('');
});
test('the input field value is whatever it is written', () => {
  const props = {
    searchText: '',
  };
  const wrapper = shallow(<SearchForm />);

  wrapper.find('.inputField').simulate('change', {
    target: { name: 'input', value: 'hello' },
  });

  const input = wrapper.find('.inputField');

  expect(input.props().value).toBe('hello');
});
