
const express = require('express');
require('dotenv').config();
const app = express();

const categoryRouter = require('./routes/categories.js');
const productRouter = require('./routes/product.js');
// const fruitRouter = require('./route.js');
const createTimestamp = require('./middleware/timestamp.js');
const logger = require('./middleware/logger.js');
const notFound = require('./middleware/404.js');
const errorHandler = require('./middleware/500.js');

// Global Middleware
app.use(express.json()); // step in front of ALL requests, inspect it for a body and parse it 

// app.use(getBrowser);
app.use(categoryRouter);
app.use(productRouter);

app.use(createTimestamp);
app.use(logger); 

// all routes take in a next we don't usually talk about it

// Add the name of the browser to the request

// function getBrowser(req, res, next) {
//   req.browser = req.headers['user-agent'];
//   next();
// }
// DATABASE
let db = [];

app.get('/api/v1/food', (req, res, next) => {
  let count = db.length;
  let results = db;
  let logged = req.logges;
  res.json({ count, results, logged });
});

// TEST FOR ERROR
app.get('/bad', (req, res) => {
  throw new Error('ERROR ERROR ERROR');
});


app.use('*', notFound);
app.use(errorHandler);





module.exports = {
  start: port => {
    const PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};