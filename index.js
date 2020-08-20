'use strict';
// Require server
const mongoose = require('mongoose');
const server = require('./lib/server.js');


//Require dotenv
require('dotenv').config();
//Call the start method from server
server.start();
