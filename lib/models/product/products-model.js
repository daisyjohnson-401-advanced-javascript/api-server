'use strict';

const DataModel = require('../model.js');
const schema = require('./products.schema.js');

class Products extends DataModel { }

module.exports = new Products(schema);