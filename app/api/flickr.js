const Flickr = exports;
const queryString = require('query-string');
const request = require('request-promise');

const flickrOptions = {
  api_key: process.env.FLICKR_TOKEN,
  secret: process.env.FLICKR_SECRET,
  user_id: process.env.USER_ID,
};

const getData = async (params = {}, method) => {
  const url = 'https://api.flickr.com/services/rest/';
  const query = {
    method,
    api_key: flickrOptions.api_key,
    per_page: params.size || 50,
    page: params.page || 1,
    user_id: flickrOptions.user_id,
    format: 'json',
    nojsoncallback: 1,
  };
  const composedUrl = `${url}?${queryString.stringify(query)}`;
  return request(composedUrl, (error, resp, body) => {
    if (error) throw error;
    return body;
  });
};

/**
 * Get Images from API Flickr
 * @param  {Object} query to get the data
 * @return {Array}       Return array of images
 */
Flickr.getImages = (params = {}) => new Promise((resolve, reject) => getData(params, 'flickr.people.getPublicPhotos').then(resolve).then(reject));
