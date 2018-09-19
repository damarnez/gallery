import React from 'react';
import ReactDOM from 'react-dom';
import LightBox from './lightBox';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json';

configure({ adapter: new Adapter() });

const fakeData = {
  data:{
    farm: 6,
    id: "30874089732",
    isfamily: 0,
    isfriend: 0,
    ispublic: 1,
    owner: "66956608@N06",
    secret: "dca3c6fce1",
    server: "5624",
    title: "Flickr Heroes of the Week"
  },
  urls:{
    lImg: "https://farm6.staticflickr.com/5624/30874089732_dca3c6fce1_z.jpg",
    mImg: "https://farm6.staticflickr.com/5624/30874089732_dca3c6fce1_m.jpg",
    sImg: "https://farm6.staticflickr.com/5624/30874089732_dca3c6fce1_s.jpg"
  }
};

const fakeHandler = () => {};

it('It shows the title', (done) => {
  const wrapper = shallow(<LightBox onClose={fakeHandler} clickPrev={fakeHandler} clickNext={fakeHandler} photo={fakeData} />);
  expect(wrapper.find('h3').text()).toEqual('Flickr Heroes of the Week');
  done();
});