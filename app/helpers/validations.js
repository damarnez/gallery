const Validations = {};

Validations.getImages = (req, res, next) => {
  let { page = 1, size = 25 } = req.query;

  page = parseInt(page, 10);
  size = parseInt(size, 10);
  if (typeof page === 'number' && !Number.isNaN(page) && typeof size === 'number' && !Number.isNaN(size) && page > 0 && size > 9) {
    return next();
  }
  return res.status(404).json({ message: 'Wrong parameters' });
};

module.exports = Validations;
