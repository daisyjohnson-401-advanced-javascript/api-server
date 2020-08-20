const express = require('express');
const router = express.Router();


// PRODUCTS
router.post('/products', (req, res) => {
  console.log('What got added?', req.body);
  res.status(201).send('ok');
});

router.get('/products', (req, res) => {
  let output = {
    type: req.query.type || 'unknown',
  };
  res.status(200).json(output);
});

// : makes it a placeholder or "wildcard"
router.get('/products/:id', (req, res) => {
  let output = {
    type: req.params.type,
  };
  res.status(200).json(output);
});

router.put('/products/:id', (req, res) => {
  let output = {
    id: req.params.id,
  };
  res.status(200).json(output);
});
router.delete('/products/:id', (req, res, next) => {
  console.log('What got deleted', req.body);
  res.status(200).send('ok');
});

module.exports = router;