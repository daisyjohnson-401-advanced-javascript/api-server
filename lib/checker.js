const assert = require('assert');

function checker(req, res, next) {
  // (key, value) Checked and Trueand whtever middleware involved
  req.checked = true;
  next(req, res, next);
}

module.exports = checker;

const outerRequest = {};
const outerResponse = {};
const outerNext = function (req, res, next) {
  assert(req.checked);
  console.log('You Got It!');
};
checker(outerRequest, outerResponse, outerNext);

