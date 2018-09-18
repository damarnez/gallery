const Images = require('./images.js');

describe(' Check images controller ', () => {
  it(' Exist get', () => {
    expect(typeof Application.get).toBe('function');
  });
});
