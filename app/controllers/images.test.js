const Images = require('./images.js');

describe(' Check images controller ', () => {
  it(' Exist get', () => {
    expect(typeof Images.get).toBe('function');
  });
});
