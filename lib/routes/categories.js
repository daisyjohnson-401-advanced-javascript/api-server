
const express = require('express');
const router = express.Router();

// CATEGORIES
router.post('/categories', (req, res) => {
  console.log('What got added?', req.body);
  res.status(201).send('ok');
});

router.get('/categories', (req, res) => {
  let output = {
    type: req.query.type || 'unknown',
  };
  res.status(200).json(output);
});
 
router.get('/categories/:id', (req, res) => {
  let output = {
    type: req.params.type,
  };
  res.status(200).json(output);
});

router.put('/categories/:id', (req, res) => {
  let output = {
    id: req.params.id,
  };
  res.status(200).json(output);
});

router.delete('/categories/:id', (req, res, next) => {
  console.log('What got deleted', req.body);
  res.status(200).send('ok');
});

module.exports = router;