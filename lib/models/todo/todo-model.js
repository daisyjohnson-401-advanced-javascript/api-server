'use strict';

const DataModel = require('../model.js');
const schema = require('./todo.schema');


class Todos extends DataModel { }

module.exports = new Todos(schema);