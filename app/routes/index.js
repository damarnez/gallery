const express = require('express');

const Router = express.Router();
const path = require('path');

// Default response from Server
Router.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/index.html'));
});

module.exports = Router;
