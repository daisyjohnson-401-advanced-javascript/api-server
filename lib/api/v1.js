'use strict';

const express = require('express');
const router = express.Router();

const getModel = require('./params.js');

router.param('model', getModel);

// Route Definitions
router.get('/api/v1/:model', handleGetAll);
router.post('/api/v1/:model', handlePost);
router.get('/api/v1/:model/:id', handleGetOne);
router.put('/api/vi/:model/:id', handlePut);
router.delete('/api/vi/:model/:id', handleDelete);
// Route Handlers

// Get all of the things
async function handleGetAll(req, res, next) {
  try {
    const results = await req.model.get();

    res.json({
      count: results.length,
      results,
    });

  } catch (err) {

    next(err);
  }
}
// get ONE thing
function handleGetOne(req, res, next){
  let id = req.params.id;
  req.model
    .get(id)
    .then(record => res.status(200).json(record))
    .catch(next);
}
// Create all the things
function handlePost(req, res, next){
  req.model.post(req.body)
    .then(result => res.status(200).json(result))
    .catch(next);
}

// UPDATE THE THINGS
function handlePut(req, res, next){
  req.model.update(req.params.id, req.body)
    .then(result => res.status(200).json(result))
    .catch(next);
}

// DELETE THINGS
async function handleDelete(req, res, next){
  try {
    let id = req.params.id;

    const result = await req.model.delete(id);

    res.json(result);
  } catch (err) {

    next(err);
  }

}

module.exports = router;