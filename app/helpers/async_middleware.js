//This function helps to add async function in express
module.exports = fn => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);
  