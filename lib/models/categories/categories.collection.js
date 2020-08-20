'use strict';

const schema = require('./categories.schema');
const DataModel = require('../model.js');

class Category extends DataModel { }

module.exports = Category(schema);