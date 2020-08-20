'use strict';

// function notFoundHandler(req, res, next){
//   res.status(404);
//   res.statusMessage = 'I can\'t find that!';
//   res.json({ error: 'Not Found'});
// }

// notFoundHandler();

function notFoundHandler(req, res, next){
  console.log('Unknown Route');
  res.status(404);
  res.send('Nothing here!');
  res.end();
}

module.exports = notFoundHandler;