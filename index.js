'use strict';

//Require dotenv
require('dotenv').config();
const mongoose = require('mongoose');
// Require server



const MONGODB_URI = 'mongodb://localhost:27017/';

const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
mongoose.connect(MONGODB_URI, mongooseOptions);

//Call the start method from server
const server = require('./lib/server.js');
server.start(3000);