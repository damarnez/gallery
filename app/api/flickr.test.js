require('dotenv').config();
const flickr = require('./flickr.js');

describe(' Check get images ', () => {
  it(' Should work ', async (done) => {
   	const data = await flickr.getImages();
   	console.log(data);
    expect(typeof data).toBe('object');
    done();
  });
});
