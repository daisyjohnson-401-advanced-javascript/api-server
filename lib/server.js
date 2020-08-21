'use strict';

const express = require('express');
require('dotenv').config();


// const categoryRouter = require('./routes/categories.js');
// const productRouter = require('./routes/product.js');
// const fruitRouter = require('./route.js');

// Custom Middleware
const createTimestamp = require('./middleware/timestamp.js');
const logger = require('./middleware/logger.js');
const notFound = require('./middleware/404.js');
const errorHandler = require('./middleware/500.js');

// Custom Routes
const apiRouter = require('./routes/api-v1.js');


const app = express();
app.use(express.json()); // step in front of ALL requests, inspect it for a body and parse it 

//Actual Routes
app.use(apiRouter);

app.use(createTimestamp);
app.use(logger); 

// SERVER TEST ERROR
app.get('/bad', (req, res) => {
  throw new Error('Baddy McBaderson was here');
});

app.use('*', notFound);
app.use(errorHandler);



module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};