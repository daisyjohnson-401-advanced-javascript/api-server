module.exports = (req, res, next) => {
  req.requestTime = Date.now();
  res.send('Requested at: ', req.requestTime);
  next();
  
};
