'use strict';
const schema = require('./product.schema.js');
const DataModel = require('../model.js');

class Products extends DataModel { 
  constructor() {
    super(schema);
  }
}

module.exports = new Products(schema);