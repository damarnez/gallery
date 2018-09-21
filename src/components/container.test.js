import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Container from './container';

configure({ adapter: new Adapter() });

const fakeData = [
  { x: 1 }, { x: 2 }, { x: 3 },
];

it('It change to correct class', (done) => {
  const wrapper = shallow(<Container list={fakeData} onClick={() => {}}>{({ element, i }) => (<div className="test" key={i}>{element.x}</div>)}</Container>);
  expect(wrapper.find('.test').first().text()).toEqual('1');
  done();
});
