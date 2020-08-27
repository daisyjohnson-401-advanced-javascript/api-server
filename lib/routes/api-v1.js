'use strict';

const express = require('express');
const router = express.Router();

const categories = require('../models/categories/categories-collection.js');
const products = require('../models/product/product-collection.js');

function getModel(req, res, next) {

  let model = req.params.model;
  // middleware to put data on the request object
  switch (model) {
  case 'categories':
    req.model = categories;
    next();
    return;
  case 'products':
    req.model = products;
    next();
    return;
  default:
    next('Invalid Model');
    return;
  }
}

router.param('model', getModel);

// Route Definitions
router.get('/api/v1/:model', handleGetAll);
router.post('/api/v1/:model', handlePost);
router.get('/api/v1/:model/:id', handleGetOne);
router.put('/api/vi/:model/:id', handlePut);
router.delete('/api/vi/:model/:id', handleDelete);
// Route Handlers

// Get all of the things
function handleGetAll(req, res, next) {
  req.model.get()
    .then(results => {
      const output = {
        count: results.length,
        results: results,
      };
      // console.log('RESULTS HERE:', results.length);
      res.status(200).json(output);
    })
    .catch(next);
}
// get ONE thing
function handleGetOne(req, res, next){
  let id = req.params.id;
  req.model.get(id)
    .then(record => res.status(200).json(record))
    .catch(next);
}
// Create all the things
function handlePost(req, res, next){
  req.model.post(req.body)
    .then(result => res.status(200).json(result))
    .catch(next);
}

// UPDATE THE THINGS
function handlePut(req, res, next){
  req.model.update(req.params.id, req.body)
    .then(result => res.status(200).json(result))
    .catch(next);
}

// DELETE THINGS
async function handleDelete(req, res, next){
  req.model.delete(req.params.id)
    .then(result => res.status(200).json(result))
    .catch(next);
}


module.exports = router;