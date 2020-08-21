'use strict';

const schema = require('./categories.schema');
const DataModel = require('../mongo.js');

class Category extends DataModel { }

module.exports = new Category(schema);