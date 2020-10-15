import React from 'react';
import { shallow } from 'enzyme';
import AppTest from '../AppTest';

describe('App component', () => {

  test('should render with `Hello Mr.Cabeso` text', () => {
    const wrapper = shallow(<AppTest />);
    expect(wrapper.find('div').text()).toEqual('Hello Mr.Cabeso');
  });
});
