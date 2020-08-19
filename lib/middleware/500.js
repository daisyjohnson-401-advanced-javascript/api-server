module.exports = (req,res,next) => {
  console.log('Error!!!');
  res.status(500);
  res.send('Internal Service Error');
  res.end();
};