import React from 'react';
import { shallow } from 'enzyme';
import Counter from '../components/counter.jsx'



describe('counter - button', () => {

//   it('', () => {
//     const wrapper = shallow(<Counter store={store} />);
//     expect(wrapper.containsMatchingElement(<Child />)).toEqual(true);
//   })
// })
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
  const tree = shallow(<Counter name=".btn btn-secondary" handleClick={mockFn} />
  )
  // const button = tree.find('.btn btn-secondary')
  // expect(button.exists()).toEqual(true) 
  .simulate('click');
  expect(tree.mockFn).toHaveBeenCalledWith('warning');
  })
})