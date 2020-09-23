'use strict';

// function notFoundHandler(req, res, next){
//   res.status(404);
//   res.statusMessage = 'I can\'t find that!';
//   res.json({ error: 'Not Found'});
// }

// notFoundHandler();

module.exports = (req,res,next) => {
  res.status(404);
  res.statusMessage = 'Resource Not Found';
  res.json({error:'Not Found'});
};