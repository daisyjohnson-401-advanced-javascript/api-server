'use strict';
const schema = require('./product.schema.js');
const DataModel = require('../mongo.js');

class Products extends DataModel{ 

}

module.exports = new Products(schema);