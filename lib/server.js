'use strict';

const express = require('express');
require('dotenv').config();


// const categoryRouter = require('./routes/categories.js');
// const productRouter = require('./routes/product.js');
// const fruitRouter = require('./route.js');

// Custom Middleware


const notFound = require('./middleware/404.js');
const errorHandler = require('./middleware/500.js');

// Custom Routes
const apiRouter = require('./routes/api-v1.js');
const version1 = require('./routes/api-v1.js');


const app = express();

//Global Middleware
app.use(express.json()); 

app.use('./api/v1', version1);

app.use(apiRouter);

app.use('*', notFound);

app.use(errorHandler);
 

module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};