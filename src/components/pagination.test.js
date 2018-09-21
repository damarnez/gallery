import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Pagination from './pagination';

configure({ adapter: new Adapter() });

const fakeHandler = () => {};

it('It shows the correct page activated', (done) => {
  const wrapper = shallow(<Pagination onChangePage={fakeHandler} pageSize={10} page={2} totalItems={100} />);
  expect(wrapper.find('li.active a').text()).toEqual('2');
  done();
});
