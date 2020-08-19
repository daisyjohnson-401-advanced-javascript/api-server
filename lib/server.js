
const express = require('express');
require('dotenv').config();
const app = express();

// const fruitRouter = require('./route.js');

const notFound = require('./middleware/404');
const errorHandler = require('./middleware/500');

const logRequest = require('./middleware/logger.js');

// Global Middleware
app.use(express.json()); // step in front of ALL requests, inspect it for a body and parse it 

//register middleware 

app.use(getBrowser);

// app.use(fruitRouter);

app.use(logRequest); 
// all routes take in a next we don't usually talk about it
// CRUD ROUTES

// PRODUCTS
app.post('/products', (req, res) => {
  console.log('What got added?', req.body);
  res.status(201).send('ok');
});

app.get('/products', (req, res) => {
  let output = {
    type: req.query.type || 'unknown',
  };
  res.status(200).json(output);
});

// : makes it a placeholder or "wildcard"
app.get('/products/:id', (req, res) => {
  let output = {
    type: req.params.type,
  };
  res.status(200).json(output);
});

app.put('/products/:id', (req, res) => {
  let output = {
    id: req.params.id,
  };
  res.status(200).json(output);
});
// ************************************************************
app.delete('/products/:id', (req, res, next) => {
  console.log('What got deleted', req.body);
  res.status(200).send('ok');
});

// CATEGORIES
app.post('/categories', (req, res) => {
  console.log('What got added?', req.body);
  res.status(201).send('ok');
});

app.get('/categories', (req, res) => {
  let output = {
    type: req.query.type || 'unknown',
  };
  res.status(200).json(output);
});
 
app.get('/categories/:id', (req, res) => {
  let output = {
    type: req.params.type,
  };
  res.status(200).json(output);
});

app.put('/categories/:id', (req, res) => {
  let output = {
    id: req.params.id,
  };
  res.status(200).json(output);
});

app.delete('/categories/:id', (req, res, next) => {
  console.log('What got deleted', req.body);
  res.status(200).send('ok');
});

// Add the name of the browser to the request

function getBrowser(req, res, next) {
  req.browser = req.headers['user-agent'];
  next();
}

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