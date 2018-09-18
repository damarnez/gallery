const Validations = {};

Validations.getImages = (req,res,next) => {
	let { page = 1, size = 25 } = req.query;
	 
	page = parseInt(page);
	size = parseInt(size);
	if(typeof page ==='number' && !isNaN(page) && typeof size === 'number' && !isNaN(size) && page > 0 && size > 9){
		return next();
	}else{
		return res.status(404).json({ message: 'Wrong parameters'});
	}
	return next();
};

module.exports = Validations;
