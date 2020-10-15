import React from 'react';
import { shallow } from 'enzyme';
import Counters from '../components/counters.jsx'



describe('counters - button', () => {
  it('', () => {
    const mockFn = jest.fn();
    const tree = shallow(<Counters className=".btn btn-success m-2" handleClick={mockFn} />
    )
    const button = tree.find('.btn btn-success m-2')
    expect(button.exists()).toEqual(true) 
    // .simulate('click');
    // expect(tree.mockFn).toHaveBeenCalled(true);
    })
})