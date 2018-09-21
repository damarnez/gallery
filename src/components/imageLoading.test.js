import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ImageLoading from './imageLoading';

configure({ adapter: new Adapter() });

const url = 'https://farm6.staticflickr.com/5624/30874089732_dca3c6fce1_s.jpg';
const position = 10;

it('It shows the correct image url', (done) => {
  const wrapper = shallow(<ImageLoading position={position} shortImgUrl={url} largeImgUrl={url} />);
  expect(wrapper.find('.iron-image-preload').prop('style').backgroundImage).toEqual("url('https://farm6.staticflickr.com/5624/30874089732_dca3c6fce1_s.jpg')");
  done();
});
