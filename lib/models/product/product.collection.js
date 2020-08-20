'use strict';
const schema = require('./product.schema.js');
const DataModel = require('../model.js');

class Products extends DataModel{ 

}

module.exports = new Products(schema);