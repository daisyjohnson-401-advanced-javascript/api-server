'use strict';
// Require server
const server = require('./lib/server.js');
//Require dotenv
require('dotenv').config();
//Call the start method from server
server.start();
