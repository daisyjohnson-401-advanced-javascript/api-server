'use strict';

// function notFoundHandler(req, res, next){
//   res.status(404);
//   res.statusMessage = 'I can\'t find that!';
//   res.json({ error: 'Not Found'});
// }

// notFoundHandler();

module.exports = (req,res,next) => {
  let error = { error: 'Resource Not Found' };
  res.statusCode = 404;
  res.statusMessage = 'Not Found';
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(error));
  res.end();
};