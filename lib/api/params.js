'use strict';

const categories = require('../models/categories/categories-model.js');
const products = require('../models/product/products-model.js');
const todos = require('../models/todo/todo-model.js');

function getModel(req, res, next) {

  const modelMap = {
    'products': products,
    'categories': categories,
    todos,
  };

  const model = modelMap(req.params.model);
  // middleware to put data on the request object
  if (model) {

    req.model = model;

    next();
  } else {
    next('Invalid Model');
  }

}

module.exports = getModel;