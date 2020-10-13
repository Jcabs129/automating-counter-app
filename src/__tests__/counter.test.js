import React from 'react';
import { shallow } from 'enzyme';
import counter from '../components/counter'



describe('counter - button', () => {
  
//   it('', () => {
//     expect(counter).toBeDefined();
//   });
//   it('', () => {
//     const tree = shallow(
//       <counter className="btn btn-info m-2" />
//     );
//     expect(tree).toMatchSnapshot();
//   });
// });
// it('', () => {
//   const tree = shallow(
//     <counter className="btn btn-secondary" />
//   );
//   expect(typeof(tree.find('.button').node.props.value)).toBe('string');
//   expect(tree.find('.button').node.props.value).toEqual('button test');
// })
it('', () => {
  const mockFn = jest.fn();
  const wrapper = shallow(
    <counter className="btn btn-secondary" handleClick={mockFn} />
  )
  const button = wrapper.find('.btn btn-secondary')
  expect(button.exists()).toEqual(true)
  // .simulate('click');
  // expect(mockFn).toHaveBeenCalled();
  })
})