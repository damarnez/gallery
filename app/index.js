const express = require('express');
const app = express();
const defaultRoutes = require('./routes');
const api = require('./routes/api');
const bodyParser = require('body-parser');
const path = require('path');
const helmet = require('helmet');

//Express configuration
app.use(helmet());
app.use(express.static(path.join(__dirname, '../dist')));
app.use(bodyParser.json());
//Routes
app.use('/api',api);
app.use('/',defaultRoutes);

app.listen(process.env.PORT || 3000 , function () {
  console.log('Example app listening on port 3000!');
});

module.exports = app;