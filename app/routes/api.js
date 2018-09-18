const express = require('express');
const Api = express.Router();
const AsyncMiddleware = require('../helpers/async_middleware');
const ImagesController = require('../controllers/images');
const Validations = require('../helpers/validations');

// Definition API Routes
Api.get('/images', Validations.getImages,AsyncMiddleware(ImagesController.get));

module.exports = Api;
