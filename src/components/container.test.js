import React from 'react';
import ReactDOM from 'react-dom';
import Container from './container';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json';

configure({ adapter: new Adapter() });

const fakeData = [
	{x:1},{x:2},{x:3}
];

it('It change to correct class', (done) => {
  const wrapper = shallow(<Container list={fakeData} onClick={() => {}}>
						{({element,i}) => {
							return (<div className="test" key={i}>{element.x}</div>); 
						}}
					</Container>);
  expect(wrapper.find('.test').first().text()).toEqual('1');
  done();
});