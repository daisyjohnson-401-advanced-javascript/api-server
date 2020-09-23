'use strict';

const DataModel = require('../model.js');
const schema = require('./categories.schema');


class Category extends DataModel {}

module.exports = new Category(schema);