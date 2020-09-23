'use strict';

const categories = require('../models/categories/categories-model.js');
const products = require('../models/product/products-model.js');

function getModel(req, res, next) {

  let model = req.params.model;
  // middleware to put data on the request object
  switch (model) {
  case 'categories':
    req.model = categories;
    next();
    break;
  case 'products':
    req.model = products;
    next();
    break;
  default:
    next('Invalid Model');
    break;
  }

}

module.exports = getModel;