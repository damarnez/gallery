const Images = exports;
const flickrApi = require('../api/flickr');

/**			
 * GET
 * @param  {Object} req [request]
 * @param  {Object} res [response]
 * @return {Array}     [list of a images from flickr]
 */
Images.get = async (req, res) => {
  const { size = 0, page = 0 } = req.query;
  return res.status(200).json(await flickrApi.getImages({  size, page  }));
};
